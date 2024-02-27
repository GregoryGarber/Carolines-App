import React from "react";
import styles from "./homePage.module.css";
import Updates from "./updates/updates";


const HomePage = () => {
  return (
    <div className={styles.home_page}>
      <h1 className={styles.title}>Caroline's Personal Website</h1>
      <Updates />
    </div>
  );
};

export default HomePage;