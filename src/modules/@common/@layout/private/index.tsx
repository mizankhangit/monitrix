import { Navigate, Outlet } from "react-router-dom";
import Header from "../_components/header";
import SidebarComponent from "../_components/sidebar";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

export const PrivateLayout = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="container">
          <div className="flex min-h-screen">
            <div className="py-10">
              <SidebarComponent />
            </div>
            <div className="py-10 pl-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
