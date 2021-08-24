import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import zhCN from "antd/lib/locale/zh_CN";
import App from "./App";
import "./index.scss";

moment.locale("zh-cn");

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
