import { MenuProps, Popover } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NotificaionIcon = () => {
  const Nofification = () => {
    return (
      <div className="w-[350px] w-full">
        <div>head</div>
        <div>body</div>
        <div>footer</div>
      </div>
    );
  };

  return (
    <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer leading-[2px]">
      <Popover
        placement="bottomRight"
        content={<Nofification />}
        arrow={false}
        trigger="click"
      >
        <BiBell className="text-2xl leading-1" />{" "}
      </Popover>
    </div>
  );
};

export default NotificaionIcon;
