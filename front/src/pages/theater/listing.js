import React, { useState, useEffect } from 'react';
import styles from "./listing.module.css";
import Movie from './movie';


const Listing = ({theater}) => {
    return (
        <div className={styles.listing}>
            {theater ? theater.map((movie, index) => (
                <Movie
                    key={index}
                    photo={movie.photo}
                    link={movie.link}
                    title={movie.title}
                />
            )) : null
        }
        </div>
    );
};

export default Listing;