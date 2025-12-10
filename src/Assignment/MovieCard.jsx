import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ title, rating }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.rating}>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
