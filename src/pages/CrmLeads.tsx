import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Search, ArrowUpDown, Filter, RefreshCw } from "lucide-react";
import CrmLayout from "@/components/crm/CrmLayout";

const STATUS_OPTIONS = [
  "Primeiro contato",
  "Interagindo",
  "Orçamento enviado",
  "Ganho",
  "Perdido",
  "Nunca respondeu",
];

const QUALIFICACAO_OPTIONS = ["Quente", "Morno", "Frio"];

const STATUS_COLORS: Record<string, string> = {
  "Primeiro contato": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Interagindo": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Orçamento enviado": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Ganho": "bg-green-500/20 text-green-400 border-green-500/30",
  "Perdido": "bg-red-500/20 text-red-400 border-red-500/30",
  "Nunca respondeu": "bg-muted text-muted-foreground border-border",
};

const QUALIFICACAO_COLORS: Record<string, string> = {
  "Quente": "bg-red-500/20 text-red-400 border-red-500/30",
  "Morno": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Frio": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
};

type Lead = {
  id: string;
  created_at: string | null;
  nome: string;
  telefone: string;
  interesse: string;
  status: string | null;
  qualificacao: string | null;
  observacao: string | null;
};

type SortField = "nome" | "created_at" | "status" | "qualificacao";
type SortDir = "asc" | "desc";

export default function CrmLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterQual, setFilterQual] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const { toast } = useToast();

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order(sortField, { ascending: sortDir === "asc" });

    if (error) {
      toast({ title: "Erro ao carregar leads", description: error.message, variant: "destructive" });
    } else {
      setLeads((data as Lead[]) || []);
    }
    setLoading(false);
  }, [sortField, sortDir, toast]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Real-time subscription
  useEffect(() => {
    const channel = supabase
      .channel("leads-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => {
        fetchLeads();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchLeads]);

  const updateLead = async (id: string, field: string, value: string) => {
    const { error } = await supabase.from("leads").update({ [field]: value }).eq("id", id);
    if (error) {
      toast({ title: "Erro ao atualizar", description: error.message, variant: "destructive" });
    }
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const filtered = leads.filter((lead) => {
    const matchSearch =
      !search ||
      lead.nome.toLowerCase().includes(search.toLowerCase()) ||
      lead.telefone.includes(search) ||
      lead.interesse.toLowerCase().includes(search.toLowerCase());

    const matchStatus = filterStatus === "all" || lead.status === filterStatus;
    const matchQual = filterQual === "all" || lead.qualificacao === filterQual;

    return matchSearch && matchStatus && matchQual;
  });

  return (
    <CrmLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Leads</h1>
            <p className="text-sm text-muted-foreground">{filtered.length} leads encontrados</p>
          </div>
          <Button variant="outline" size="sm" onClick={fetchLeads} className="gap-2">
            <RefreshCw className="h-4 w-4" /> Atualizar
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, telefone ou interesse..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                {STATUS_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterQual} onValueChange={setFilterQual}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Qualificação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {QUALIFICACAO_OPTIONS.map((q) => (
                  <SelectItem key={q} value={q}>{q}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="cursor-pointer" onClick={() => toggleSort("created_at")}>
                  <span className="flex items-center gap-1">Data <ArrowUpDown className="h-3 w-3" /></span>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => toggleSort("nome")}>
                  <span className="flex items-center gap-1">Nome <ArrowUpDown className="h-3 w-3" /></span>
                </TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Interesse</TableHead>
                <TableHead className="cursor-pointer" onClick={() => toggleSort("status")}>
                  <span className="flex items-center gap-1">Status <ArrowUpDown className="h-3 w-3" /></span>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => toggleSort("qualificacao")}>
                  <span className="flex items-center gap-1">Qualificação <ArrowUpDown className="h-3 w-3" /></span>
                </TableHead>
                <TableHead>Observação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    Carregando...
                  </TableCell>
                </TableRow>
              ) : filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    Nenhum lead encontrado
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                      {lead.created_at
                        ? format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })
                        : "—"}
                    </TableCell>
                    <TableCell className="font-medium">{lead.nome}</TableCell>
                    <TableCell>
                      <a
                        href={`https://wa.me/55${lead.telefone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        {lead.telefone}
                      </a>
                    </TableCell>
                    <TableCell className="max-w-[150px] truncate">{lead.interesse}</TableCell>
                    <TableCell>
                      <Select
                        value={lead.status || "Primeiro contato"}
                        onValueChange={(val) => updateLead(lead.id, "status", val)}
                      >
                        <SelectTrigger className="h-8 w-[170px] border-0 p-0">
                          <Badge className={`${STATUS_COLORS[lead.status || "Primeiro contato"]} border text-xs`}>
                            {lead.status || "Primeiro contato"}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          {STATUS_OPTIONS.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={lead.qualificacao || "Morno"}
                        onValueChange={(val) => updateLead(lead.id, "qualificacao", val)}
                      >
                        <SelectTrigger className="h-8 w-[100px] border-0 p-0">
                          <Badge className={`${QUALIFICACAO_COLORS[lead.qualificacao || "Morno"]} border text-xs`}>
                            {lead.qualificacao || "Morno"}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          {QUALIFICACAO_OPTIONS.map((q) => (
                            <SelectItem key={q} value={q}>{q}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Textarea
                        className="min-h-[36px] h-9 resize-none border-0 bg-transparent p-1 text-sm focus:bg-secondary"
                        placeholder="Adicionar nota..."
                        defaultValue={lead.observacao || ""}
                        onBlur={(e) => {
                          if (e.target.value !== (lead.observacao || "")) {
                            updateLead(lead.id, "observacao", e.target.value);
                          }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </CrmLayout>
  );
}
