import { Navigate, Outlet } from "react-router-dom";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import Header from "../_components/header";
import SidebarComponent from "../_components/sidebar";

export const PrivateLayout = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <Header />
      <div className="page_wrapper">
        <div className="container">
          <div className="flex">
            {width >= 1024 && (
              <div className="py-10 flex-shrink-0 sidebar_wrapper">
                <SidebarComponent />
              </div>
            )}
            <div className="py-5 lg:py-10 pl-0 lg:pl-10 w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
