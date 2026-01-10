import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound"
import BIaaS from "./pages/services/BIaaS";
import DataAnalytics from "./pages/services/DataAnalytics";
import BIDashboards from "./pages/services/BIDashboards";
import DataEngineering from "./pages/services/DataEngineering";
import PredictiveAnalytics from "./pages/services/PredictiveAnalytics";
import ManagedBI from "./pages/services/BIaaS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/BIaaS" element={<ManagedBI />} />
          <Route path="/services/DataAnalytics" element={<DataAnalytics />} />
          <Route path="/services/BiDashboards" element={<BIDashboards />} />
          <Route path="/services/DataEngineering" element={<DataEngineering />} />
          <Route path="/services/predictive-analytics" element={<PredictiveAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
