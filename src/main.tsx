import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppRouter from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "antd/dist/reset.css";
import "./styles/main.scss";

const antTheme = {
  token: {
    colorPrimary: "#AC224D",
    fontFamily: "Rubik, sans-serif",
    colorTextBase: "#808291",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={antTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <ProSidebarProvider>
            <AppRouter />
          </ProSidebarProvider>
        </Provider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
