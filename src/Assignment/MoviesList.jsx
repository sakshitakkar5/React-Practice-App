import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const movies = [
    { title: "Inception", rating: 8.8 },
    { title: "Interstellar", rating: 8.6 },
    { title: "Dunki", rating: 7.2 }
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MoviesList;
