import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../modules/auth/register";
import Success from "../modules/auth/forgot_password";
import ForgotPassword from "../modules/auth/forgot_password";
import Verification from "../modules/auth/verification";
import ResetPassword from "../modules/auth/reset_password";
import PublicLayout from "../modules/@common/@layout/public";
import PrivateLayout from "../modules/@common/@layout/private";
import Dashboard from "../modules/dashboard";
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
        {/* <Route path="/" element={<PublicLayout />}> */}
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* 
         
          <Route path="/" element={<Navigate to="/login" replace />} /> */}
        {/* </Route> */}

        <Route path="/" element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/websites" element={<Websites />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
