import { Button, Drawer, DrawerProps, RadioChangeEvent, Space } from "antd";
import { FiDownloadCloud, FiFilter } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import { useState } from "react";

export const Websites = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="mb-4">
        <div className="flex justify-start items-center gap-3">
          <MdWeb className="text-[28px]" />
          <div className="text-[28px] font-medium">Website</div>
        </div>
        <p>You have total 2,595 website.</p>
      </div>
      <div className="border p-6 ">
        <div className="grid grid-cols-4">
          <div className="flex flex-col justify-center items-center">
            <p className="font-medium text-xs mb-1">Online</p>
            <div className="text-2xl text-teal-400">9.28K</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-medium text-xs mb-1">Offline</p>
            <div className="text-2xl text-red-400">9.28K</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-medium text-xs mb-1">Enabled</p>
            <div className="text-2xl text-lime-400">9.28K</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-medium text-xs mb-1">Disabled</p>
            <div className="text-2xl text-zinc-400">9.28K</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6 py-6">
          <div className="bg-teal-400 rounded">
            <p className="text-[11px] font-medium px-2 py-[2px] text-white ">
              Up
            </p>
          </div>
          <div className="bg-red-600 rounded">
            <p className="text-[11px] font-medium px-2 py-[2px] text-white ">
              Down
            </p>
          </div>
          <div className="bg-yellow-400 rounded">
            <p className="text-[11px] font-medium px-2 py-[2px] text-white ">
              Alert
            </p>
          </div>
          <div className="bg-zinc-400 rounded">
            <p className="text-[11px] font-medium px-2 py-[2px] text-white ">
              Disabled
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-white flex justify-center items-center gap-2  hover:bg-primary hover:text-white border">
            <FiDownloadCloud />
            <p>Export</p>
          </button>

          <button className="btn btn-white flex justify-center items-center gap-2  hover:bg-primary hover:text-white border">
            <FiFilter />
            <span>Filter</span>
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={showDrawer}
          >
            <span>Add Website</span>
          </button>
        </div>
      </div>
      <Drawer
        title="Website"
        className="custom_drawer"
        placement={"right"}
        width={700}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Websites;
