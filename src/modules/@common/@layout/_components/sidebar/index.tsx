import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem component={<Link to="/dashboard" />}>Dashboard</MenuItem>
        <MenuItem component={<Link to="/website" />}> Website</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
