import Table, { ColumnsType } from "antd/es/table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import workSpaceData from "../../../_fakeData/workSpaceData.json";
import { FiUsers } from "react-icons/fi";
import { Checkbox, Drawer, Select, Tooltip } from "antd";
import { HiPlus } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import FormTeam from "../../@common/form/team";

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "name",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.name}</div>;
    },
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    render: (_, record) => {
      return <div>{record?.website}</div>;
    },
  },
  {
    title: "Domains",
    dataIndex: "domains",
    key: "domains",
    render: (_, record) => {
      return <div>{record?.domains}</div>;
    },
  },
  {
    title: "SSL",
    dataIndex: "SSL",
    key: "ssl",
    render: (_, record) => {
      return <div>{record?.ssl}</div>;
    },
  },
  {
    title: "Blacklist",
    dataIndex: "Blacklist",
    key: "blacklist",
    render: (_, record) => {
      return <div>{record?.blacklist}</div>;
    },
  },

  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <div className="inline-flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-zinc-200 cursor-pointer transition-all duration-300">
          <BiDotsHorizontalRounded className="text-xl " />
        </div>
      );
    },
  },
];

export const SettingsTeam = () => {
  const [open, setOpen] = useState(false);
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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // select Field for workspace
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // checkbox

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <div className="flex justify-start items-center gap-2 mb-5">
        <FiUsers className="text-2xl" />
        <span className="text-2xl font-bold">Team Member</span>
      </div>
      <div className="flex justify-end items-center mb-4">
        <button onClick={showDrawer} className="btn btn-primary">
          Add Team Member
        </button>
      </div>
      <div className="border rounded ">
        <div className="overflow-auto">
          <Table
            rowKey={`campaignId subscriberId`}
            size="middle"
            dataSource={workSpaceData}
            columns={columns}
            // loading={isLoading}
            pagination={paginationOptions}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-[#F8F8F9]" : "bg-[#fff]"
            }
          />
        </div>
      </div>
      <Drawer
        title={
          <div className="flex justify-start items-center gap-3">
            <FiUsers className="text-xl" />
            <span className="text-lg">Add Team Member</span>
          </div>
        }
        className="custom_drawer"
        placement={"right"}
        contentWrapperStyle={{ maxWidth: "700px", width: "calc(100% - 20px)" }}
        onClose={onClose}
        open={open}
      >
        <FormTeam />
      </Drawer>
    </div>
  );
};

export default SettingsTeam;
