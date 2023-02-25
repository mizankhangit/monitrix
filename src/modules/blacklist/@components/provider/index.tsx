import { Drawer, DrawerProps, Modal, Pagination, Select } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";
import blackListProvidersData from "../../../../_fakeData/blackListProvidersData.json";

const ProviderList = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  //   drawer
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //   table
  const columns: ColumnsType<any> = [
    {
      title: "Provider Name",
      dataIndex: "Reg Date",
      key: "campaign_name",
      render: (_, record) => {
        return (
          <Link to="#">
            <div className="line-clamp-1">{record?.providerName}</div>
          </Link>
        );
      },
    },
    {
      title: "Host",
      dataIndex: "Reg Date",
      key: "campaign_name",
      render: (_, record) => {
        return <div className="line-clamp-1">{record?.host}</div>;
      },
    },
  ];

  //   Pagination
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
      <button
        onClick={showDrawer}
        type="button"
        className="btn btn-white flex justify-center items-center gap-2  hover:bg-primary hover:text-white border"
      >
        <MdOutlineFormatListBulleted className="text-lg" />
        <span>Providers (50)</span>
      </button>
      {/* Drawer start */}

      <Drawer
        title="All Provider List"
        className="custom_drawer"
        placement={"right"}
        width={700}
        onClose={onClose}
        open={open}
      >
        <div>
          <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
            <div className="text-lg font-medium">50 Providers</div>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Search by Providers Name"
                className="input_field !pr-10"
              />
              <CiSearch className="provider_search_icon" />
            </div>
          </div>

          <div className="border rounded mt-5">
            <div className="overflow-auto">
              <Table
                rowKey={`campaignId subscriberId`}
                size="middle"
                dataSource={blackListProvidersData}
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
      </Drawer>
    </div>
  );
};

export default ProviderList;
