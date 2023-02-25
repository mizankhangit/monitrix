import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FiGlobe } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";

export const SidebarComponent = ({ className }: any) => {
  return (
    <Sidebar className={className} backgroundColor="#fff" style={{ border: 0 }}>
      <Menu>
        <div className="mb-6">
          <div className="text-sm font-medium text-primary">DASHBOARDS</div>
          <MenuItem
            component={<Link to="/dashboard" />}
            icon={<MdOutlineDashboardCustomize className="text-xl" />}
          >
            <span className="text-base font-medium">Dashboard</span>
          </MenuItem>
        </div>

        <div className="mb-6">
          <div className="text-sm font-medium text-primary">MONITORING</div>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/websites" />}
            icon={<CgWebsite className="text-xl" />}
          >
            <span className="text-base font-medium">Website</span>
          </MenuItem>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/domains" />}
            icon={<FiGlobe className="text-xl" />}
          >
            <span className="text-base font-medium">Domains</span>
          </MenuItem>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/websites" />}
            icon={<BsShieldCheck className="text-xl" />}
          >
            <span className="text-base font-medium">SSL</span>
          </MenuItem>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/websites" />}
            icon={<SiSpringsecurity className="text-xl" />}
          >
            <span className="text-base font-medium">BlackList</span>
          </MenuItem>
        </div>

        <div className="mb-6">
          <div className="text-sm font-medium text-primary">ALERTING</div>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/websites" />}
            icon={<FaExchangeAlt className="text-xl" />}
          >
            <span className="text-base font-medium">Integrations</span>
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
