import React from "react";

import MovieCollection from "../movie/collection/MovieCollection";
import CardLoader from "../helpers/loaders/cardLoader/CardLoader";

import { fetchHomepageData } from "../../utils/Api";
import ShowCollection from "../show/collection/ShowCollection";

export default function Home() {
  const response = fetchHomepageData();

  const showCardsList = (dataArray, errorMessage, loading, mediaType) => {
    if (loading == true) {
      return <CardLoader />;
    }
    if (dataArray.length === 0) {
      return (
        <h2 className="mt-5 uppercase tracking-wider text-onyx-primary-30 text-lg font-bold">
          {errorMessage}
        </h2>
      );
    }
    switch (mediaType) {
      case "movies":
        return <MovieCollection movies={dataArray} />;
      case "shows":
        return <ShowCollection shows={dataArray} />;
      default:
        <h2 className="mt-5 uppercase tracking-wider text-onyx-primary-30 text-lg font-bold">
          Could not load {mediaType}
        </h2>;
    }
  };

  return (
    <div className="container mx-auto px-4 pt-16">
      <div>
        <h2 className="uppercase tracking-wider text-mellon-primary text-lg font-semibold">
          Popular movies
        </h2>
        {showCardsList(
          response.data.movies,
          "Could not load popular movies",
          response.loading.loadingMovies,
          "movies"
        )}
      </div>
      <div className="py-24">
        <h2 className="uppercase tracking-wider text-mellon-primary text-lg font-semibold">
          Popular shows
        </h2>
        {showCardsList(
          response.data.shows,
          "Could not load popular shows",
          response.loading.loadingShows,
          "shows"
        )}
      </div>
    </div>
  );
}
