import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GtmLoader } from "./components/GtmLoader";

const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const CrmLeads = lazy(() => import("./pages/CrmLeads.tsx"));
const CrmDashboard = lazy(() => import("./pages/CrmDashboard.tsx"));
const Coworking = lazy(() => import("./pages/Coworking.tsx"));
const Eventos = lazy(() => import("./pages/Eventos.tsx"));
const SalaDeReuniao = lazy(() => import("./pages/SalaDeReuniao.tsx"));
const LocacaoFilmagem = lazy(() => import("./pages/LocacaoFilmagem.tsx"));

const queryClient = new QueryClient();

// No domínio lp.p7criativo.com.br a home é a página de Eventos.
const isLpDomain =
  typeof window !== 'undefined' && window.location.hostname.startsWith('lp.');

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <GtmLoader />
          <Routes>
            <Route path="/" element={isLpDomain ? <Eventos /> : <Index />} />
            <Route path="/crm" element={<CrmLeads />} />
            <Route path="/crm/dashboard" element={<CrmDashboard />} />
            <Route path="/coworking" element={<Coworking />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/saladereuniao" element={<SalaDeReuniao />} />
            <Route path="/locacao-filmagem" element={<LocacaoFilmagem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
