import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import websiteDetailIncidentsData from "../../../../../_fakeData/websiteDetailsIncidentsData.json";
import { MdCheckBox } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const columns: ColumnsType<any> = [
  {
    title: "Type",
    dataIndex: "Type",
    key: "Type",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.type}</div>;
    },
  },
  {
    title: "Comparison",
    dataIndex: "Comparison",
    key: "Comparison",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.comparison}</div>;
    },
  },
  {
    title: "Status code",
    dataIndex: "statusCode",
    key: "statusCode",
    render: (_, record) => {
      return <div>{record?.statusCode}</div>;
    },
  },
  {
    title: "Message",
    dataIndex: "Condition",
    key: "Condition",
    render: (_, record) => {
      return (
        <div className="flex justify-start items-center gap-2">
          {record?.message}
        </div>
      );
    },
  },

  {
    title: "Time",
    dataIndex: "Time",
    key: "Time",
    render: (_, record) => {
      return <div>{record?.time}</div>;
    },
  },
];

const WebsiteDetailsIncidents = () => {
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
    <div>
      <div className="border rounded mt-8">
        <div className="p-6 text-lg font-medium">Incidents</div>
        <div className="overflow-auto">
          <Table
            rowKey={`campaignId subscriberId`}
            size="middle"
            dataSource={websiteDetailIncidentsData}
            columns={columns}
            // loading={isLoading}
            pagination={paginationOptions}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetailsIncidents;
