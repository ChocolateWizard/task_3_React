import React from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetailsData } from "../../../utils/Api";
import CastCollection from "../../person/actor/collection/CastCollection";
import CardLoader from "../../helpers/loaders/cardLoader/CardLoader";

export default function ShowDetails() {
  const { id } = useParams();
  const { data, loading, error } = fetchShowDetailsData(id);

  const CreatorsTab = ({ creatorsAsText }) => {
    if (creatorsAsText == null || creatorsAsText === "") {
      return null;
    }
    return (
      <div className="border-t-2 border-onyx-tint">
        <div className="mt-2 mb-2 text-lg">
          <div className="">Creators: {creatorsAsText}</div>
        </div>
      </div>
    );
  };
  const NumberOfSeasonsTab = ({ number_of_seasons }) => {
    if (number_of_seasons == null || number_of_seasons === 0) {
      return null;
    }
    return (
      <div className="border-y-2 border-onyx-tint">
        <div className="mt-2 mb-2 text-lg">
          <div className="">Seasons: {number_of_seasons}</div>
        </div>
      </div>
    );
  };

  const ShowTabs = ({ creatorsAsText, number_of_seasons }) => {
    if (
      (creatorsAsText == null || creatorsAsText === "") &&
      (number_of_seasons == null || number_of_seasons === 0)
    ) {
      return null;
    }
    return (
      <div className="mt-12">
        <CreatorsTab creatorsAsText={creatorsAsText} />
        <NumberOfSeasonsTab number_of_seasons={number_of_seasons} />
      </div>
    );
  };

  //======================================================================
  if (loading.loadingShowData == true) {
    return <CardLoader />;
  }
  if (data.showData === null) {
    return (
      <h2 className="px-4 mt-5 uppercase tracking-wider text-onyx-primary-30 text-lg font-bold">
        Unable to load show details
      </h2>
    );
  }

  return (
    <>
      <div className="border-b border-onyx-tint">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
          <img
            className="w-64 md:w-96"
            src={
              "https://image.tmdb.org/t/p/original/" + data.showData.poster_path
            }
            alt=""
          />
          <div className="md:ml-24">
            <h2 className="text-4xl font-semibold">{data.showData.name}</h2>
            <div className="flex flex-wrap items-center text-gray-400 text-sm mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="bi bi-star-fill fill-mellon-primary"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <span className="ml-1">{data.showData.vote_average}%</span>
              <span className="mx-2">|</span>
              <span>{data.showData.first_air_date}</span>
              <span className="mx-2">|</span>
              <span>{data.showData.genresAsText}</span>
            </div>
            <p className="text-onyx-contrast mt-8">{data.showData.overview}</p>
            <ShowTabs
              creatorsAsText={data.showData.creatorsAsText}
              number_of_seasons={data.showData.number_of_seasons}
            />

            <div className="mt-12">
              <button className="flex items-center bg-mellon-primary text-onyx-tint rounded font-semibold px-5 py-4 hover:bg-mellon-shade transition ease-in-out duration-150">
                <svg
                  className="bi bi-play-circle-fill fill-onyx-shade"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                <span className="ml-2">Play trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-onyx-tint">
        <CastCollection actors={data.showData.cast} />
      </div>
    </>
  );
}
