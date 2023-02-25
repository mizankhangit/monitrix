import { Drawer } from "antd";
import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import NotificaionDropdown from "../notification_dropdown";
import ProfileDropdown from "../profile_dropdown";
import SidebarComponent from "../sidebar";

export const Header = () => {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="border-b bg-[#f5f6fa] sticky top-0 z-50 h-[65px] flex items-center">
        <div className="container">
          <div className="flex items-center justify-between">
            {width <= 1024 && (
              <button onClick={showDrawer} className="text-2xl">
                <CgMenu />
              </button>
            )}

            <div className="w-[144px] ">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-full object-cover	"
              />
            </div>
            <div className="flex items-center justify-center gap-3">
              <NotificaionDropdown />
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>
      {width <= 1024 && (
        <Drawer
          title="Basic Drawer"
          placement="left"
          onClose={onClose}
          open={open}
        >
          <SidebarComponent className="sidebar_mobile" />
        </Drawer>
      )}
    </>
  );
};

export default Header;
