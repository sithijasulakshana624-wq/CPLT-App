import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import LoginPage from "@/pages/LoginPage";
import PrivacyAgreement from "@/components/PrivacyAgreement";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import ChatPage from "@/pages/ChatPage";
import ProgressPage from "@/pages/ProgressPage";
import logo from "./icon-192.png";



const queryClient = new QueryClient();

function AppRoutes() {
  const { user, loading, privacyAccepted } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0a1e] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <img 
  src={logo} 
  alt="CPLT Logo" 
  className="w-16 h-16 rounded-2xl shadow-lg shadow-purple-900/60 animate-pulse" 
/>
          
          <p className="text-sm text-purple-400 font-medium">Loading CPLT Model…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  if (!privacyAccepted) {
    return <PrivacyAgreement />;
  }

  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/chat" component={ChatPage} />
      <Route path="/progress" component={ProgressPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <AppRoutes />
          </WouterRouter>
        </AuthProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
