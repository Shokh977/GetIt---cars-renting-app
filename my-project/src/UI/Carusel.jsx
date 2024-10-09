import React from "react";
import "./Carusel.css";
import { CarCard } from "./carCard";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./arrowButton/ArrowButton";
import useEmblaCarousel from "embla-carousel-react";

const Carusel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <PrevButton
        className="carousel-btn prev"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container">
          {slides.data.map((item) => (
            <div className="embla__slide flex-[0_0_94%] sm:flex-[0_0_85%] md:flex-[0_0_35%] lg:flex-[0_0_45%] xl:flex-[0_0_37%] flex justify-center"
              key={item.id}>
              <CarCard
              image={item.image}
                name={item.model}
                title={item.fuelType}
                km={item.mileage}
                cc={item.engine}
                price={item.price}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>

      <NextButton
        className="carousel-btn next"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </section>
  );
};

export default Carusel;
