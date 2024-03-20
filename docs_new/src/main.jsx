import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SideNavProvider from "./providers/navProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SideNavProvider>
        <App />
      </SideNavProvider>
    </BrowserRouter>
  </React.StrictMode>
);
