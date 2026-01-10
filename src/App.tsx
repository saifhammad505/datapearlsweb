import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BIaaS from "./pages/services/BIaaS";
import DataAnalytics from "./pages/services/DataAnalytics";
import BIDashboards from "./pages/services/BIDashboards";
import DataEngineering from "./pages/services/DataEngineering";
import WorkflowAutomation from "./pages/services/WorkflowAutomation";
import AdvancedIntelligence from "./pages/services/AdvancedIntelligence";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/BIaaS" element={<BIaaS />} />
          <Route path="/services/DataAnalytics" element={<DataAnalytics />} />
          <Route path="/services/BIDashboards" element={<BIDashboards />} />
          <Route path="/services/DataEngineering" element={<DataEngineering />} />
          <Route path="/services/WorkflowAutomation" element={<WorkflowAutomation />} />
          <Route path="/services/advanced-intelligence" element={<AdvancedIntelligence />} />
          <Route path="/services/predictive-analytics" element={<AdvancedIntelligence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;