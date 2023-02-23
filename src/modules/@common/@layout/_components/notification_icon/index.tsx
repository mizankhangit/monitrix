import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { BiBell } from "react-icons/bi";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
export const NotificaionIcon = () => {
  return (
    <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer leading-[2px]">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottomRight"
        overlayClassName="bell_icon"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <BiBell className="text-2xl leading-1" />
          </Space>
          {/* <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer">
            <BiBell className="text-2xl leading-1" />
            <div className="w-[8px] h-[8px] bg-[#2dd4bf] absolute top-[2px] right-[10px] rounded-full "></div>
          </div> */}
        </a>
      </Dropdown>
    </div>
  );
};

export default NotificaionIcon;
