import React from "react";
import { Button, Result } from "antd";
// import styles from "./index.module.scss";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default NotFound;
