import React from "react";

import CardLoader from "../helpers/loaders/cardLoader/CardLoader";

import { fetchHomepageData } from "../../utils/Api";

import CardCarousel from "../cards/carousel/CardCarousel";
import MovieCard from "../movie/card/MovieCard";
import ShowCard from "../show/card/ShowCard";

export default function Home() {
  const response = fetchHomepageData();

  const ShowCardsList = ({
    dataArray,
    errorMessage,
    loading,
    CardComponent,
  }) => {
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
    return <CardCarousel dataArray={dataArray} CardComponent={CardComponent} />;
  };

  return (
    <div className="container mx-auto px-4 pt-16">
      <div>
        <h2 className="uppercase tracking-wider text-mellon-primary text-lg font-semibold">
          Popular movies
        </h2>
        <ShowCardsList
          dataArray={response.data.movies}
          errorMessage={"Could not load popular movies"}
          loading={response.loading.loadingMovies}
          CardComponent={MovieCard}
        />
      </div>
      <div className="py-24">
        <h2 className="uppercase tracking-wider text-mellon-primary text-lg font-semibold">
          Popular shows
        </h2>
        <ShowCardsList
          dataArray={response.data.shows}
          errorMessage={"Could not load popular shows"}
          loading={response.loading.loadingShows}
          CardComponent={ShowCard}
        />
      </div>
    </div>
  );
}
