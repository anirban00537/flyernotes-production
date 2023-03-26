import { useState, useEffect } from "react";

const useAutoCollapseSidebar = (breakpoint: number = 768) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return { sidebarCollapsed, toggleSidebar };
};

export default useAutoCollapseSidebar;
