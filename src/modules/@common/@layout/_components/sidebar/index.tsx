import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

export const SidebarComponent = () => {
  return (
    <Sidebar breakPoint={"lg"} backgroundColor="#fff">
      <Menu>
        <div className="mb-6">
          <div className="text-sm font-medium text-primary">DASHBOARDS</div>
          <MenuItem
            component={<Link to="/dashboard" />}
            icon={<MdOutlineDashboardCustomize />}
          >
            Dashboard
          </MenuItem>
        </div>

        <div className="mb-6">
          <div className="text-sm font-medium text-primary">MONITORING</div>
          <MenuItem component={<Link to="/websites" />} icon={<CgWebsite />}>
            Website
          </MenuItem>
        </div>

        <div className="">ALERTING</div>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
