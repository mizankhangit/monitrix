import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import websiteDetailLogData from "../../../../../_fakeData/websiteDetailLogData.json";
import { MdCheckBox } from "react-icons/md";

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

const WebsiteDetailsLog = () => {
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

  return (
    <div className="border rounded mt-8">
      <div className="p-6 text-lg font-medium">
        Detailed log (Last 50 checks)
      </div>
      <div className="overflow-auto">
        <Table
          rowKey={`campaignId subscriberId`}
          size="middle"
          dataSource={websiteDetailLogData}
          columns={columns}
          // loading={isLoading}
          pagination={paginationOptions}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
          }
        />
      </div>
    </div>
  );
};

export default WebsiteDetailsLog;
