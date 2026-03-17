import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts";
import { format, subDays, startOfDay, isAfter } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Users, TrendingUp, Trophy, XCircle } from "lucide-react";
import CrmLayout from "@/components/crm/CrmLayout";

const STATUS_OPTIONS = [
  "Primeiro contato",
  "Interagindo",
  "Orçamento enviado",
  "Ganho",
  "Perdido",
  "Nunca respondeu",
];

const COLORS = ["#3b82f6", "#eab308", "#a855f7", "#22c55e", "#ef4444", "#6b7280"];
const QUAL_COLORS = ["#ef4444", "#eab308", "#06b6d4"];

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

export default function CrmDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("30");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: true });
      setLeads((data as Lead[]) || []);
      setLoading(false);
    };
    fetchLeads();
  }, []);

  const filtered = useMemo(() => {
    const cutoff = startOfDay(subDays(new Date(), parseInt(period)));
    return leads.filter((l) => {
      const dateOk = l.created_at ? isAfter(new Date(l.created_at), cutoff) : true;
      const statusOk = filterStatus === "all" || l.status === filterStatus;
      return dateOk && statusOk;
    });
  }, [leads, period, filterStatus]);

  const statusData = useMemo(() => {
    const counts: Record<string, number> = {};
    STATUS_OPTIONS.forEach((s) => (counts[s] = 0));
    filtered.forEach((l) => {
      const s = l.status || "Primeiro contato";
      counts[s] = (counts[s] || 0) + 1;
    });
    return STATUS_OPTIONS.map((s) => ({ name: s, value: counts[s] }));
  }, [filtered]);

  const qualData = useMemo(() => {
    const counts: Record<string, number> = { Quente: 0, Morno: 0, Frio: 0 };
    filtered.forEach((l) => {
      const q = l.qualificacao || "Morno";
      counts[q] = (counts[q] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filtered]);

  const timelineData = useMemo(() => {
    const days: Record<string, number> = {};
    const numDays = parseInt(period);
    for (let i = numDays; i >= 0; i--) {
      const d = format(subDays(new Date(), i), "dd/MM");
      days[d] = 0;
    }
    filtered.forEach((l) => {
      if (l.created_at) {
        const d = format(new Date(l.created_at), "dd/MM");
        if (d in days) days[d]++;
      }
    });
    return Object.entries(days).map(([date, count]) => ({ date, count }));
  }, [filtered, period]);

  const conversionRate = useMemo(() => {
    const ganho = filtered.filter((l) => l.status === "Ganho").length;
    const perdido = filtered.filter((l) => l.status === "Perdido").length;
    const total = ganho + perdido;
    return total > 0 ? ((ganho / total) * 100).toFixed(1) : "0";
  }, [filtered]);

  const totalLeads = filtered.length;
  const ganhoCount = filtered.filter((l) => l.status === "Ganho").length;
  const perdidoCount = filtered.filter((l) => l.status === "Perdido").length;

  const chartConfig = {
    value: { label: "Quantidade", color: "hsl(var(--primary))" },
    count: { label: "Leads", color: "hsl(var(--primary))" },
  };

  if (loading) {
    return (
      <CrmLayout>
        <div className="flex items-center justify-center py-20 text-muted-foreground">Carregando...</div>
      </CrmLayout>
    );
  }

  return (
    <CrmLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <div className="flex gap-2">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="15">Últimos 15 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 90 dias</SelectItem>
                <SelectItem value="365">Último ano</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[170px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                {STATUS_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Leads</p>
                <p className="text-2xl font-bold">{totalLeads}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-green-500/10 p-3">
                <Trophy className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ganhos</p>
                <p className="text-2xl font-bold text-green-400">{ganhoCount}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-red-500/10 p-3">
                <XCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Perdidos</p>
                <p className="text-2xl font-bold text-red-400">{perdidoCount}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
                <p className="text-2xl font-bold">{conversionRate}%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Status Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Leads por Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {statusData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Qualification Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Leads por Qualificação</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={qualData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {qualData.map((_, i) => (
                      <Cell key={i} fill={QUAL_COLORS[i % QUAL_COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Timeline Chart */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Leads por Período</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 3 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </CrmLayout>
  );
}
