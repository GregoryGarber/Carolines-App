import React, { useState } from 'react';
import styles from "./updates.module.css";
import ImageModal from '../imageModal/ImageModal';

const Updates = () => {
  const url = "https://carolines-movie-photos.s3.amazonaws.com/image_from_ios_720.jpg"
  const link = "https://www.instagram.com/niall.breen.comics/"
  const [selectedImg, setSelectedImg] = useState(null);
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
        <div>
        <img className={styles.image} src={url} alt="thumbnail" onClick={() => setSelectedImg(url)} />
        {selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} linkOut={link}/>}
      </div>
    </div>
  );
};

export default Updates;