import { BiBell } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { TbWaveSawTool } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { Link } from "react-router-dom";
import NotificaionDropdown from "../notification_dropdown";
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

export const ProfileDropdown = () => {
  return (
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
  );
};

export default ProfileDropdown;
