import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

export const PublicLayout = () => {
  const auth = useAuth();
  return !auth ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicLayout;
