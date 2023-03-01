import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { LineChart } from "../../../../@common/chart";
import websiteDetailLogData from "../../../../../_fakeData/websiteDetailLogData.json";
import { MdCheckBox } from "react-icons/md";
import WebsiteDetailsLog from "../log";

const columns: ColumnsType<any> = [
  {
    title: "SL No",
    dataIndex: "sl no",
    key: "sl no",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.key}</div>;
    },
  },
  {
    title: "HTTP status code",
    dataIndex: "HTTP status code",
    key: "HTTP status code",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.httpStatusCode}</div>;
    },
  },
  {
    title: "Load time",
    dataIndex: "Load time",
    key: "Load time",
    render: (_, record) => {
      return <div>{record?.loadTime}</div>;
    },
  },
  {
    title: "Message",
    dataIndex: "Message",
    key: "Message",
    render: (_, record) => {
      return (
        <div className="flex justify-start items-center gap-2">
          <div>
            <MdCheckBox className="text-green-400 text-base" />
          </div>
          {record?.message}
        </div>
      );
    },
  },

  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    render: (_, record) => {
      return <div>{record?.date}</div>;
    },
  },
];

const WebsiteDetailsOverview = () => {
  // pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const paginationOptions = {
    showSizeChanger: true,
    showQuickJumper: true,
    defaultPageSize: limit,
    current: page,
    onChange: (page: any) => {
      setPage(page);
    },
    onShowSizeChange: (_: any, showItem: any) => {
      setLimit(showItem);
    },
    pageSizeOptions: [10, 20, 30, 50],
    // total: data?.totalItems,
    showTotal: (total: number, range: any) =>
      `${range[0]} to ${range[1]} of ${total}`,
  };

  const data1 = [
    {
      id: 1,
      name: "URL",
      value: "https://www.google.com",
    },
    {
      id: 2,
      name: "Search String",
      value: "None",
    },
    {
      id: 3,
      name: "Status",
      value: "Active",
      type: "badge",
    },
    {
      id: 4,
      name: "Last Load Time",
      value: "0.3727s",
    },
    {
      id: 5,
      name: "Project",
      value: "Default",
    },
    {
      id: 6,
      name: "Website",
      value: "Enabled",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-y-4 mt-3">
        {data1?.map((item: any, i: any) => {
          return (
            <div className="grid grid-cols-[150px_1fr] justify-start items-center gap-4 ">
              <span className="text-lg font-medium">{item?.name}</span>
              {item?.type ? (
                <div className="bg-teal-400 w-max px-2 text-white rounded">
                  {item?.value}
                </div>
              ) : (
                <span>{item?.value}</span>
              )}
            </div>
          );
        })}
      </div>
      <div className="border p-6 mt-8">
        Performance
        <LineChart />
      </div>
      <WebsiteDetailsLog />
    </div>
  );
};

export default WebsiteDetailsOverview;
