import React, { createContext, useContext, useState } from "react";

/**
 * @typedef {Object} ShowPathObject
 * @property {string} command
 * @property {string} path
 *
 */

/**
 * @typedef {Object} useCustomContextProps
 * @property {boolean} isVisible
 * @property {ShowPathObject | undefined} showPath
 * @property {() => void} openSideNav
 * @property {() => void} closeSideNav
 * @property {(ShowPathObject) => void} setShowPath
 */

/** @type {useCustomContextProps} */
const Context = createContext(undefined);

const ContextProvider = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const [showPath, setShowPath] = useState(
    /** @type {ShowPathObject | undefined} */ (undefined)
  );

  const openSideNav = () => {
    setVisible(true);
  };

  const closeSideNav = () => {
    setVisible(false);
  };

  return (
    <Context.Provider
      value={{ openSideNav, closeSideNav, setShowPath, isVisible, showPath }}
    >
      {children}
    </Context.Provider>
  );
};

export function useCustomContext() {
  const context = useContext(Context);
  if (!context)
    throw new Error("useSideNavContext debe estar dentro de un Context");

  return context;
}

export default ContextProvider;
