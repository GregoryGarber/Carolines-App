import React from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <h2 onClick={() => navigate("/")} className={styles.item}>Home</h2>
      <h2 onClick={() => navigate("/todo")} className={styles.item}>ToDo</h2>
      <h2 onClick={() => navigate("/theater")} className={styles.item}>Theater</h2>
    </div>
  );
};

export default Header;