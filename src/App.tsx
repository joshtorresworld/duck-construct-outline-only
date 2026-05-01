import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { RequireAuth, RequireTenant } from "@/components/auth/RequireAuth";
import Index from "./pages/Index.tsx";
import SmallBusiness from "./pages/SmallBusiness.tsx";
import Industries from "./pages/Industries.tsx";
import QuickWins from "./pages/QuickWins.tsx";
import Week1Ship from "./pages/Week1Ship.tsx";
import Integrations from "./pages/Integrations.tsx";
import RoiCalculator from "./pages/RoiCalculator.tsx";
import Zantaz from "./pages/Zantaz.tsx";
import CustomerAcquisition from "./pages/CustomerAcquisition.tsx";
import DiscoverySurvey from "./pages/DiscoverySurvey.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import ProspectRorigi from "./pages/ProspectRorigi.tsx";
import PracticeAudit from "./pages/PracticeAudit.tsx";
import Login from "./pages/Login.tsx";
import Onboard from "./pages/Onboard.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Setup from "./pages/Setup.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Marketing */}
            <Route path="/" element={<Index />} />
            <Route path="/small-business" element={<SmallBusiness />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/quick-wins" element={<QuickWins />} />
            <Route path="/week-1-ship" element={<Week1Ship />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/roi-calculator" element={<RoiCalculator />} />
            <Route path="/customer-acquisition" element={<CustomerAcquisition />} />
            <Route path="/discovery-survey" element={<DiscoverySurvey />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/zantaz" element={<Zantaz />} />
            <Route path="/prospect/rorigi" element={<ProspectRorigi />} />
            <Route path="/practice-audit" element={<PracticeAudit />} />

            {/* App */}
            <Route path="/login" element={<Login />} />
            <Route path="/onboard" element={<RequireAuth><Onboard /></RequireAuth>} />
            <Route path="/dashboard" element={<RequireTenant><Dashboard /></RequireTenant>} />
            <Route path="/setup" element={<RequireTenant><Setup /></RequireTenant>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
