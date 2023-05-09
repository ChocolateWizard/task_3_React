import React from "react";

import MovieCard from "../card/MovieCard";

export default function MovieCollection({movies}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />       
        ))}
      </div>
  );
}
