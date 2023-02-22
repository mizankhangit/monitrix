import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

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
        {/* <Route path="/" element={<PublicOutlet />}> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/" element={<Navigate to="/login" replace />} /> */}
        {/* </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
