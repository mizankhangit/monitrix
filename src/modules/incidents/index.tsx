import Table, { ColumnsType } from "antd/es/table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import incidentData from "../../_fakeData/indidentsData.json";
import { FiUsers } from "react-icons/fi";
import { Checkbox, Drawer, Select, Tooltip } from "antd";
import { HiPlus } from "react-icons/hi";
import { AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import { CheckboxChangeEvent } from "antd/es/checkbox";
// import FormTeam from "../../@common/form/team";

const columns: ColumnsType<any> = [
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (_, record) => {
      return <div className="line-clamp-1">{record?.description}</div>;
    },
  },
  {
    title: "Occurrence time",
    dataIndex: "Occurrence time",
    key: "Occurrence time",
    render: (_, record) => {
      return <div>{record?.OccurrenceTime}</div>;
    },
  },
];

export const Incidents = () => {
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

  // Drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
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
      <div className="flex justify-between items-center gap-2 mb-5">
        <div className="flex justify-between items-center gap-2">
          <AiOutlineWarning className="text-2xl" />
          <span className="text-2xl font-bold">Indidents</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-white">Clear Log</button>
          <button onClick={showDrawer} className="btn btn-white">
            Help
          </button>
        </div>
      </div>
      <div className="border rounded mt-8">
        <div className="overflow-auto">
          <Table
            rowKey={`campaignId subscriberId`}
            size="middle"
            dataSource={incidentData}
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
            <AiOutlineWarning className="text-xl" />
            <span className="text-lg">Help</span>
          </div>
        }
        className="custom_drawer"
        placement={"right"}
        contentWrapperStyle={{ maxWidth: "700px", width: "calc(100% - 20px)" }}
        onClose={closeDrawer}
        open={open}
      ></Drawer>
    </div>
  );
};

export default Incidents;
