import { Tabs, TabsProps } from "antd";
import { FiDownloadCloud } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import AddButton from "../@components/add_button";
import WebsiteDetailsAlert from "./@components/alert";
import WebsiteDetailsIncidents from "./@components/incidents";
import WebsiteDetailsLog from "./@components/log";
import WebsiteDetailsOverview from "./@components/overview";

// tab

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Overview`,
    children: <WebsiteDetailsOverview />,
  },
  {
    key: "2",
    label: `Detailed log`,
    children: <WebsiteDetailsLog />,
  },
  {
    key: "3",
    label: `Incidents (0)`,
    children: <WebsiteDetailsIncidents />,
  },
  {
    key: "4",
    label: `Waiting to be resolved (0)`,
    children: <WebsiteDetailsAlert />,
  },
  {
    key: "5",
    label: `Alert`,
    children: <WebsiteDetailsAlert />,
  },
];

export const WebsiteDetails = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex justify-start items-center gap-3">
            <MdWeb className="text-[28px]" />
            <div className="text-[28px] font-medium text-primary">Website</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-white flex justify-center items-center gap-2  hover:bg-primary hover:text-white border">
            <FiDownloadCloud />
            <p>Export</p>
          </button>
          {/* add website Button, Inside Form */}
          <AddButton />
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default WebsiteDetails;
