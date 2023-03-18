import React from "react";
import SidebarComponent from "..";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaBars } from "react-icons/fa";

const DrawerSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="ml-10 mt-5">
      <button onClick={toggleDrawer} className="flex items-center">
        <FaBars className="mr-2" size={20} />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <SidebarComponent />
      </Drawer>
    </div>
  );
};

export default DrawerSidebar;
