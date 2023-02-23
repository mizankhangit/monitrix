import { MenuProps, Popover } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { BiBell } from "react-icons/bi";
import { TbCornerDownLeft, TbCornerDownRight } from "react-icons/tb";
import { Link } from "react-router-dom";

export const NotificaionIcon = () => {
  const Nofification = () => {
    return (
      <div className="w-[350px]">
        <div className="flex justify-between items-center py-3 px-5">
          <div>Notifications</div>
          <div>Mark All as Read</div>
        </div>
        <div className="border-t"></div>
        <div className=" max-h-[280px] min-h-[280px] overflow-auto">
          <ul>
            <li>
              <Link
                to="#"
                className="py-4 px-5 hover:bg-[#f5f6fa] hover:text-primary cursor-pointer flex justify-start items-center gap-3 "
              >
                <div className="flex justify-center items-center w-[36px] h-[36px] bg-[#fef6e0] rounded-full">
                  <TbCornerDownRight className="text-2xl text-[#f4bd0e]" />
                </div>
                <div>
                  <div className="line-clamp-1">
                    You have requested to Widthdrawl
                  </div>
                  <div className="text-xs">2 hrs ago</div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="py-4 px-5 hover:bg-[#f5f6fa] hover:text-primary cursor-pointer flex justify-start items-center gap-3 "
              >
                <div className="flex justify-center items-center w-[36px] h-[36px] bg-[#e2fbf4] rounded-full">
                  <TbCornerDownLeft className="text-2xl text-[#1ee0ac]" />
                </div>
                <div>
                  <div className="line-clamp-1">
                    You have requested to Widthdrawl
                  </div>
                  <div className="text-xs">2 hrs ago</div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="py-4 px-5 hover:bg-[#f5f6fa] hover:text-primary cursor-pointer flex justify-start items-center gap-3 "
              >
                <div className="flex justify-center items-center w-[36px] h-[36px] bg-[#e2fbf4] rounded-full">
                  <TbCornerDownLeft className="text-2xl text-[#1ee0ac]" />
                </div>
                <div>
                  <div className="line-clamp-1">
                    You have requested to Widthdrawl
                  </div>
                  <div className="text-xs">2 hrs ago</div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="py-4 px-5 hover:bg-[#f5f6fa] hover:text-primary cursor-pointer flex justify-start items-center gap-3 "
              >
                <div className="flex justify-center items-center w-[36px] h-[36px] bg-[#e2fbf4] rounded-full">
                  <TbCornerDownLeft className="text-2xl text-[#1ee0ac]" />
                </div>
                <div>
                  <div className="line-clamp-1">
                    You have requested to Widthdrawl
                  </div>
                  <div className="text-xs">2 hrs ago</div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="py-4 px-5 hover:bg-[#f5f6fa] hover:text-primary cursor-pointer flex justify-start items-center gap-3 "
              >
                <div className="flex justify-center items-center w-[36px] h-[36px] bg-[#e2fbf4] rounded-full">
                  <TbCornerDownLeft className="text-2xl text-[#1ee0ac]" />
                </div>
                <div>
                  <div className="line-clamp-1">
                    You have requested to Widthdrawl
                  </div>
                  <div className="text-xs">2 hrs ago</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t"></div>
        <div className="flex justify-center items-center py-3 px-5">
          <Link to="">View All</Link>
        </div>
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
        overlayClassName="popover_body"
      >
        <BiBell className="text-2xl leading-1" />{" "}
      </Popover>
    </div>
  );
};

export default NotificaionIcon;
