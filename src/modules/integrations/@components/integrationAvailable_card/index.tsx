import { Drawer, Switch } from "antd";
import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";

const IntegrationAvailableCard = ({ item }: any) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-y-3 border p-6 hover:shadow-xl

    transition-all"
    >
      <div className="w-[64px] h-[64px]">
        <img
          src={item?.iconSrc}
          alt={item?.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-lg font-medium">{item?.title}</div>
      <p>E-mail is a basic form of outages notifications. Get alerted!</p>

      <div className="flex justify-center items-center gap-3  w-full">
        <button className="btn btn-white py-1">Overview</button>
        <button className="btn btn-white py-1">Install</button>
      </div>
    </div>
  );
};

export default IntegrationAvailableCard;
