import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "../modules/@common/@layout/private";
import PublicLayout from "../modules/@common/@layout/public";
import ForgotPassword from "../modules/auth/forgot_password";
import Register from "../modules/auth/register";
import ResetPassword from "../modules/auth/reset_password";
import Verification from "../modules/auth/verification";
import Blacklist from "../modules/blacklist";
import Dashboard from "../modules/dashboard";
import Domains from "../modules/domains";
import Incidents from "../modules/incidents";
import IntegrationsAvailable from "../modules/integrations/available";
import IntegrationsMy from "../modules/integrations/my";
import SettingsProfile from "../modules/settings/profile";
import SettingsTeam from "../modules/settings/team";
import SettingsWorkspace from "../modules/settings/workspace";
import SSL from "../modules/ssl";
import SubscriptionsLimit from "../modules/subscriptions/limit";
import SubscriptionsLog from "../modules/subscriptions/log";
import Subscriptions from "../modules/subscriptions/my";
import Websites from "../modules/websites";

// outlet

// auth
const Login = lazy(() => import("../modules/auth/login"));

const NotFound = () => {
  return <div>page not found</div>;
};

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen w-screen">
          <Spin tip="Loading" size="large" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        <Route path="/" element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/ssl" element={<SSL />} />
          <Route path="/blacklist" element={<Blacklist />} />
          <Route path="/integrations" element={<IntegrationsMy />} />
          <Route
            path="/integrations/available"
            element={<IntegrationsAvailable />}
          />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/log" element={<SubscriptionsLog />} />
          <Route path="/subscriptions/limit" element={<SubscriptionsLimit />} />

          <Route path="/settings/profile" element={<SettingsProfile />} />
          <Route path="/settings/workspace" element={<SettingsWorkspace />} />
          <Route path="/settings/team" element={<SettingsTeam />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
