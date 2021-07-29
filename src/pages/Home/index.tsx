import React, { useEffect, useState } from "react";
import { Button, Typography, Calendar } from "antd";
import { dateFormat } from "@/utils";
import styles from "./index.module.scss";

const { Title } = Typography;

const Home = () => {
  const [currTime, setCurrTime] = useState(
    dateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(dateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["site-calendar-demo-card"]}>
        <Calendar fullscreen={false} />
      </div>
      <Title>当前时间：{currTime}</Title>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Home;
