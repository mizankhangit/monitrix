import {
  Button,
  Drawer,
  DrawerProps,
  RadioChangeEvent,
  Space,
  TabsProps,
  DataTable,
  Tabs,
  Select,
} from "antd";
import { FiDownloadCloud, FiFilter } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table, { ColumnsType } from "antd/es/table";
import moment from "moment";
import domainsData from "../../_fakeData/domainData.json";
import Register from "../auth/register";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <Link to={`${record?.url}`}>
        <div className="flex justify-start items-center gap-2">
          <div className="bg-grey rounded-full p-1">
            <div className="flex justify-start items-center w-[40px] h-[40px] shrink-0">
              <img
                className="w-full h-full object-contain	 rounded-full"
                src={record?.imgSrc}
                alt={record?.name}
                title={record?.name}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="whitespace-nowrap">{record?.name}</span>
            <span className="whitespace-nowrap text-xs">{record?.url}</span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    title: "Reg Date",
    dataIndex: "Reg Date",
    key: "campaign_name",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.regDate}</div>;
    },
  },
  {
    title: "Expires",
    dataIndex: "Expires",
    key: "vendor_logo",
    render: (_, record) => {
      return <div>{record?.expires}</div>;
    },
  },
  {
    title: "Days Left",
    dataIndex: "Days Left",
    key: "vendor_logo",
    render: (_, record) => {
      return <div>{record?.daysLeft}</div>;
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "vendor_logo",
    render: (_, record) => {
      return (
        <div className="bg-teal-400 py-1 px-2 rounded-full inline-block text-white text-xs">
          {record?.status}
        </div>
      );
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

export const Domains = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [msg, setMsg] = useState("New");
  // const { data, isLoading } = useGetFilteredWinnersQuery({
  //   page: page,
  //   limit: limit,
  //   filter: filter,
  // });
  // const dataArray = data?.results;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // Input Field for workspace
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
      <div className="mb-4">
        <div className="flex justify-start items-center gap-3">
          <MdWeb className="text-[28px]" />
          <div className="text-[28px] font-medium text-primary">Domains</div>
        </div>
        <p>You have total 2,595 Domains.</p>
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
      <div className="flex justify-between items-center my-4">
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
            <span>Add Domain</span>
          </button>
        </div>
      </div>

      <div className="border rounded">
        <div className="overflow-auto">
          <Table
            rowKey={`campaignId subscriberId`}
            size="middle"
            dataSource={domainsData}
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
        <div>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: <div className="font-medium">Website Information</div>,
                key: "1",
                children: (
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                      <div className="mb-4">
                        <label htmlFor="name" className="input_label">
                          Website Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Website Name"
                          className="input_field"
                        />
                        <div className="error">This field is required</div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="name" className="input_label">
                          URL <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="url"
                          id="name"
                          placeholder="https://www.my-website.com"
                          className="input_field"
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="input_label">
                          Search string (Optional){" "}
                        </label>
                        <input
                          type="text"
                          name="url"
                          id="name"
                          placeholder="Google Analytics Object"
                          className="input_field"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <label htmlFor="country" className="input_label ">
                          Location <span className="text-danger">*</span>
                        </label>

                        <Select
                          defaultValue="Select Country"
                          style={{ width: "100%" }}
                          allowClear
                          size="large"
                          options={[
                            { value: "bangladesh", label: "Bangladesh" },
                            { value: "india", label: "India" },
                          ]}
                        />
                        <div className="error">This field is required</div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="country" className="input_label ">
                          Workspace <span className="text-danger">*</span>
                        </label>

                        <Select
                          defaultValue="Select workspace"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          size="large"
                          options={[
                            { value: "workspace1", label: "Workspace 1" },
                            { value: "workspace2", label: "Workspace 2" },
                            { value: "workspace3", label: "Workspace 3" },
                          ]}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="country" className="input_label ">
                          Delay Duration <span className="text-danger">*</span>
                        </label>

                        <Select
                          defaultValue="5 min"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          size="large"
                          options={[
                            { value: "5min", label: "5 min" },
                            { value: "10min", label: "10 min" },
                            { value: "15min", label: "15 min" },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                label: <div className="font-medium">Adjust Alerts</div>,
                key: "2",
                children: "Tab 2",
              },
            ]}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default Domains;
