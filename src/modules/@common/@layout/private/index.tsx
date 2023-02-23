import { Navigate, Outlet } from "react-router-dom";
import Header from "../_components/header";

export const PrivateLayout = () => {
  return (
    <div>
      <Header />

      <div>sidebar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;
