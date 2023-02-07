import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./carouselSlide.css";

// const items = [
//   {
//     id: 1,
//     altText: "Slide 1",
//     caption: "Slide 1",
//   },
//   {
//     id: 2,
//     altText: "Slide 2",
//     caption: "Slide 2",
//   },
//   {
//     id: 3,
//     altText: "Slide 3",
//     caption: "Slide 3",
//   },
// ];

function CarouselSlide({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  console.log(items);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          style={{ width: "100%", height: "500px" }}
          src={item.background_image}
          alt={item.name}
        />
        {/* <CarouselCaption
          className="text-danger"
          captionText={item.name}
          captionHeader={item.esrb_rating.name}
        /> */}
        <CarouselCaption
          className="text"
          captionText={item.name}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default CarouselSlide;
