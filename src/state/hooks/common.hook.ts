import React, { useState, useEffect } from "react";

const useSidebarCollapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768); // Set collapsed state for screens less than 768px
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isCollapsed;
};

export default useSidebarCollapse;
