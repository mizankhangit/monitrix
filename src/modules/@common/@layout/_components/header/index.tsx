import { BiBell } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { TbWaveSawTool } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { Link } from "react-router-dom";
import NotificaionIcon from "../notification_icon";
import { CgMenu } from "react-icons/cg";

const items: MenuProps["items"] = [
  {
    label: (
      <div className="flex items-center gap-3 bg-[f5f6fa]">
        <div className="flex justify-center items-center font-bold w-[40px] h-[40px] bg-primary rounded-full text-white">
          AB
        </div>
        <div>
          <span className="font-bold block">Abu Bin Ishtiyak</span>
          <span className=" block">info@softnio.com</span>
        </div>
      </div>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to="#">
        <div className="flex items-center gap-2 font-semibold">
          <AiOutlineUser className="text-xl" />
          <span className="text-[13px]"> View Profile</span>
        </div>
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="#">
        <div className="flex items-center gap-2 font-semibold">
          <IoIosSettings className="text-xl" />
          <span className="text-[13px]"> Account Setting</span>
        </div>
      </Link>
    ),
    key: "2",
  },

  {
    label: (
      <Link to="">
        <div className="flex items-center gap-2 font-semibold">
          <TbWaveSawTool className="text-xl" />
          <span className="text-[13px]">View Profile</span>
        </div>
      </Link>
    ),
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to="#">
        <div className="flex items-center gap-2 font-semibold">
          <FiLogOut className="text-xl" />
          <span className="text-[13px]">SignOut</span>
        </div>
      </Link>
    ),
    key: "4",
  },
];

export const Header = () => {
  return (
    <header className="border-b bg-[#f5f6fa] sticky top-0 z-50 h-[65px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <button className="text-2xl block lg:hidden">
            <CgMenu />
          </button>

          <div className="w-[144px] ">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-full object-cover	"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <NotificaionIcon />
            <div className="w-[34px] h-[34px] flex bg-primary text-white items-center justify-center rounded-full cursor-pointer">
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                placement="bottomRight"
                overlayClassName="profile_dropdown"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <AiOutlineUser className="text-white" />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
