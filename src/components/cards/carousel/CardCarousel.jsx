import React from "react";

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import "./CardCarousel.css";

export default function CardCarousel({ dataArray, CardComponent }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
      <Carousel responsive={responsive}>
        {dataArray.map((data) => (
          <CardComponent data={data} key={data.id}/>
        ))}
      </Carousel>
    </div>
  );
}
