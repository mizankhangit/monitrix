import { FiClock, FiDownloadCloud } from "react-icons/fi";
import { MdCheckBox, MdWeb } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import { FaServer } from "react-icons/fa";
import AddDomainButton from "../@components/add_domain_button";
import nameServersData from "../../../_fakeData/domainDetailsServerData.json";
import { Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";

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
    title: "Domain Name",
    dataIndex: "Domain Name",
    key: "Domain Name",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.domainName}</div>;
    },
  },
  {
    title: "Data",
    dataIndex: "Data",
    key: "Data",
    render: (_, record) => {
      return <div>{record?.data}</div>;
    },
  },
  {
    title: "TTI",
    dataIndex: "TTI",
    key: "TTI",
    render: (_, record) => {
      return (
        <div className="flex justify-start items-center gap-2">
          {record?.ttl}
        </div>
      );
    },
  },
];
export const DomainDetails = () => {
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
      <div className="flex justify-between items-center">
        <div>
          <div className="flex justify-start items-center gap-3">
            <MdWeb className="text-[28px]" />
            <div className="text-[28px] font-medium text-primary">
              Facebook.com
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-white flex justify-center items-center gap-2  hover:bg-primary hover:text-white border">
            <FiDownloadCloud />
            <p>Export</p>
          </button>
          {/* add domain button, inside form */}
          <AddDomainButton />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-6">
        <div>
          <div className="flex justify-start items-center gap-3">
            <span className="font-medium">STATUS</span>

            <Tooltip placement="top" title="This is Tooltip">
              <FiAlertCircle className="text-lg" />
            </Tooltip>
          </div>
          <div className="flex justify-between items-start border py-6 px-3 mt-1">
            <div>
              <h4 className="text-xl font-medium leading-0">Active</h4>
              <p className="text-teal-400 mt-1">The domain is active</p>
            </div>
            <div>
              <FiClock className="text-xl" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <span className="font-medium">DNS RECORDS</span>
            <Tooltip placement="top" title="This is Tooltip">
              <FiAlertCircle className="text-lg" />
            </Tooltip>
          </div>
          <div className="flex justify-between items-start border py-6 px-3 mt-1">
            <div>
              <h4 className="text-xl font-medium leading-0">16</h4>
              <p className="text-teal-400 mt-1">DNS records found</p>
            </div>
            <div>
              <FiClock className="text-xl" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <span className="font-medium">DOMAIN AGE</span>
            <Tooltip placement="top" title="This is Tooltip">
              <FiAlertCircle className="text-lg" />
            </Tooltip>
          </div>
          <div className="flex justify-between items-start border py-6 px-3 mt-1">
            <div>
              <h4 className="text-xl font-medium leading-0">9234</h4>
              <p className="text-teal-400 mt-1">Days (1997-09-15)</p>
            </div>
            <div>
              <FiClock className="text-xl" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <span className="font-medium">EXPIRY</span>
            <Tooltip placement="top" title="This is Tooltip">
              <FiAlertCircle className="text-lg" />
            </Tooltip>
          </div>
          <div className="flex justify-between items-start border py-6 px-3 mt-1">
            <div>
              <h4 className="text-xl font-medium leading-0">2087</h4>
              <p className="text-teal-400 mt-1">Days (2028-09-14)</p>
            </div>
            <div>
              <FiClock className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded mt-8">
        <div className="p-6 ">
          <div className="flex items-center gap-2">
            <FaServer />
            <h4 className="text-lg font-medium">NAMESERVERS</h4>
          </div>

          <p className="font-medium">All Nameservers on the Domain</p>
        </div>
        <div className="overflow-auto">
          <Table
            rowKey={`campaignId subscriberId`}
            size="middle"
            dataSource={nameServersData}
            columns={columns}
            // loading={isLoading}
            pagination={paginationOptions}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
            }
          />
        </div>
      </div>
      <div className="border rounded mt-8">
        <div className="p-6 ">
          <div className="flex items-center gap-2">
            <FaServer />
            <h4 className="text-lg font-medium">DNS RECORDS</h4>
          </div>

          <p className="font-medium">All DNS records of the selected domain</p>
        </div>
        <div className="overflow-auto">
          <Table
            rowKey={`campaignId subscriberId`}
            size="middle"
            dataSource={nameServersData}
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

export default DomainDetails;
