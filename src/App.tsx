import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Armada from "./pages/Armada";
import ArmadaDetail from "./pages/ArmadaDetail";
import Layanan from "./pages/Layanan";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/armada" element={<Armada />} />
            <Route path="/armada/:id" element={<ArmadaDetail />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
