import React from "react";
import styles from "./theater.module.css";
import Listing from "./listing";


const Theater = ({theater}) => {
  return (
    <div className={styles.theater_page}>
      <h1 className={styles.title}>Theater</h1>
        <Listing theater={theater}/>
    </div>
  );
};

export default Theater;