import React from "react";

import MovieCollection from "../movie/collection/MovieCollection";

export default function Home({ movies }) {
  const showMovieCardsList = (movies, errorMessage) => {
    if (movies.length === 0) {
      return (
        <h2 className="mt-5 uppercase tracking-wider text-onyx-primary-30 text-lg font-bold">
          {errorMessage}
        </h2>
      );
    }
    return <MovieCollection movies={movies} />;
  };

  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="popular-movies">
        <h2 className="uppercase tracking-wider text-mellon-primary text-lg font-semibold">
          Popular movies
        </h2>
        {showMovieCardsList(movies, "Could not load popular movies")}
      </div>
      <div className="now-playing-movies py-24">
        <h2 className="uppercase tracking-wider text-mellon-primary text-lg font-semibold">
          Current movies
        </h2>
        {showMovieCardsList(movies, "Could not load current movies")}
      </div>
    </div>
  );
}
