import React from "react";

import ShowCard from "../../card/ShowCard";

export default function ShowGrid({shows}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {shows.map((show) => (
          <ShowCard show={show} key={show.id} />       
        ))}
      </div>
  );
}
