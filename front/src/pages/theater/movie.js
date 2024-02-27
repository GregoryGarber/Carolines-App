import React from "react";
import styles from "./movie.module.css";


const Movie = ({photo, link, title}) => {
  return (
    <div className={styles.movie}>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={photo} alt={title} className={styles.photo}/>
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default Movie;