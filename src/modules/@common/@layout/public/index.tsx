import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

export const PublicLayout = () => {
  return <Outlet />;
};

export default PublicLayout;
