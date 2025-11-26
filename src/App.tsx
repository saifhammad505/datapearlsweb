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
import WorkflowAutomation from "./pages/services/WorkflowAutomation";
import PredictiveAnalytics from "./pages/services/PredictiveAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/biaas" element={<BIaaS />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/bi-dashboards" element={<BIDashboards />} />
          <Route path="/services/data-engineering" element={<DataEngineering />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/predictive-analytics" element={<PredictiveAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
