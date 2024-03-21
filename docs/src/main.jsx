import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SideNavProvider from "./providers/navProvider.jsx";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideNavProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SideNavProvider>
  </React.StrictMode>
);
