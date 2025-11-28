import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import Coffins from "./pages/Coffins";
import Niches from "./pages/Niches";
import NicheDetail from "./pages/NicheDetail";
import BodyDonation from "./pages/other-services/BodyDonation";
import PrePlanning from "./pages/other-services/PrePlanning";
import GreenBurial from "./pages/other-services/GreenBurial";
import LocalBurial from "./pages/other-services/LocalBurial";
import MainlandCemetery from "./pages/other-services/MainlandCemetery";
import PrivateNicheSales from "./pages/other-services/PrivateNicheSales";
import UsefulResources from "./pages/UsefulResources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service/:serviceId" element={<ServiceDetails />} />
          <Route path="/coffins" element={<Coffins />} />
          <Route path="/niches" element={<Niches />} />
          <Route path="/niche/:nicheId" element={<NicheDetail />} />
          <Route path="/body-donation" element={<BodyDonation />} />
          <Route path="/pre-planning" element={<PrePlanning />} />
          <Route path="/green-burial" element={<GreenBurial />} />
          <Route path="/local-burial" element={<LocalBurial />} />
          <Route path="/mainland-cemetery" element={<MainlandCemetery />} />
          <Route path="/private-niche-sales" element={<PrivateNicheSales />} />
          <Route path="/useful-resources" element={<UsefulResources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

