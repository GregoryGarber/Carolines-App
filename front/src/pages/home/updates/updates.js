import React from "react";
import styles from "./updates.module.css";


const Updates = () => {
  return (
    <div className={styles.updates}>
        <div className={styles.title_container}>
            <h1 className={styles.title}>Updates</h1>
        </div>
        <div>
        <video className={styles.video}  controls>
              <source src="https://carolines-update-video.s3.amazonaws.com/Untitled.mov" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
};

export default Updates;