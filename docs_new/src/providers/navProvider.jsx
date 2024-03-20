import React, { createContext, useContext, useState } from "react";

const SideNavContext = createContext(undefined);

const SideNavProvider = ({ children }) => {
  const [isVisible, setVisible] = useState(false);

  const openSideNav = () => {
    setVisible(true);
  };

  const closeSideNav = () => {
    setVisible(false);
  };

  return (
    <SideNavContext.Provider value={{ openSideNav, closeSideNav, isVisible }}>
      {children}
    </SideNavContext.Provider>
  );
};

export function useSideNavContext() {
  const context = useContext(SideNavContext);
  if (!context)
    throw new Error(
      "useSideNavContext debe estar dentro de un SideNavProvider"
    );

  return context;
}

export default SideNavProvider;
