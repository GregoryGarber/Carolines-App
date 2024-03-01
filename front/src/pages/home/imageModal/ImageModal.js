import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from  './ImageModal.module.css';


const ImageModal = ({ selectedImg, setSelectedImg, linkOut }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <div className={styles.backdrop} onClick={handleClick}>
      <AiOutlineClose className={styles.close_icon} onClick={() => setSelectedImg(null)} />
      <a href={linkOut} target="_blank" rel="noopener noreferrer">
        <img src={selectedImg} alt="fullsize" />
      </a>
    </div>
  )
}

export default ImageModal;