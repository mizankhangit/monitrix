import { BsShieldCheck } from "react-icons/bs";
import { CgPlayListRemove, CgWebsite } from "react-icons/cg";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineDashboard, MdOutlineSettingsSuggest } from "react-icons/md";
import { TbAlertTriangle, TbHandClick, TbPlugConnected } from "react-icons/tb";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export const SidebarComponent = ({ className }: any) => {
  return (
    <Sidebar
      className={`pr-2 ${className}`}
      backgroundColor="#fff"
      style={{ border: 0 }}
    >
      <Menu>
        <div className="mb-6">
          <div className="text-[11px] font-bold	 text-[#8094ae] mb-1 tracking-[2px] uppercase">
            Dashboards
          </div>
          <MenuItem
            component={<Link to="/dashboard" />}
            icon={<MdOutlineDashboard className="text-xl" />}
          >
            <span className="text-sm font-medium">Dashboard</span>
          </MenuItem>
        </div>

        <div className="mb-6">
          <div className="text-[11px] font-bold	 text-[#8094ae] mb-1 tracking-[2px] uppercase">
            Monitoring
          </div>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/websites" />}
            icon={<CgWebsite className="text-lg" />}
          >
            <span className="text-sm font-medium">Websites</span>
          </MenuItem>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/domains" />}
            icon={<FiGlobe className="text-lg" />}
          >
            <span className="text-sm font-medium">Domains</span>
          </MenuItem>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/ssl" />}
            icon={<BsShieldCheck className="text-xl" />}
          >
            <span className="text-sm font-medium">SSL</span>
          </MenuItem>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/blacklist" />}
            icon={<CgPlayListRemove className="text-2xl" />}
          >
            <span className="text-sm font-medium">Blacklist</span>
          </MenuItem>
        </div>

        <div className="mb-6">
          <div className="text-[11px] font-bold	 text-[#8094ae] mb-1 tracking-[2px] uppercase">
            Altering
          </div>

          <SubMenu
            className="text-sm font-medium"
            label="Integrations"
            icon={<TbPlugConnected className="text-xl" />}
          >
            <MenuItem
              className="inline-flex items-center"
              component={<Link to="/integrations" />}
            >
              <span className="text-sm font-normal">My Integrations</span>
            </MenuItem>
            <MenuItem
              className="inline-flex items-center"
              component={<Link to="/integrations/available" />}
            >
              <span className="text-sm font-normal">
                Available Integrations
              </span>
            </MenuItem>
          </SubMenu>
          <MenuItem
            className="inline-flex items-center"
            component={<Link to="/incidents" />}
            icon={<TbAlertTriangle className="text-2xl" />}
          >
            <span className="text-sm font-medium">Incidents</span>
          </MenuItem>

          <SubMenu
            className="text-sm font-medium"
            label="Subscriptions"
            icon={<TbHandClick className="text-xl" />}
          >
            <MenuItem
              className="inline-flex items-center"
              component={<Link to="/subscriptions" />}
            >
              <span className="text-sm font-normal">My Subscriptions</span>
            </MenuItem>
            <MenuItem
              className="inline-flex items-center"
              component={<Link to="/subscriptions/log" />}
            >
              <span className="text-sm font-normal">Subscription Logs</span>
            </MenuItem>
            <MenuItem
              className="inline-flex items-center"
              component={<Link to="/subscriptions/limit" />}
            >
              <span className="text-sm font-normal">Subscription Limit</span>
            </MenuItem>
          </SubMenu>

          <SubMenu
            className="text-sm font-medium"
            label="Settings"
            icon={<MdOutlineSettingsSuggest className="text-xl" />}
          >
            <MenuItem
              className="inline-flex items-center"
              component={<Link to="/settings/workspace" />}
            >
              <span className="text-sm font-normal">Workspace</span>
            </MenuItem>
            <MenuItem
              className="inline-flex items-center"
              component={<Link to="/settings/team" />}
            >
              <span className="text-sm font-normal">Team</span>
            </MenuItem>
          </SubMenu>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
