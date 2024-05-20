import { Fragment, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Assets
import baner1 from "../assets/img/hero-img-1.png";
import baner2 from "../assets/img/hero-img-2.jpg";
import { data } from "../assets/data/constants";

const slideData = [
  {
    title: "Organic Veggies & Fruits Foods",
    description: "",
    image: baner1,
    link: "#",
    buttonText: "Shop Now",
  },
  {
    title: "Organic Veggies & Fruits Foods",
    description: "",
    image: baner2,
    link: "#",
    buttonText: "Shop Now",
  },
];

const slideOptions = {
  type: "loop",
  rewind: true,
  width: 400,
  gap: "1rem",
  autoplay: true,
  perPage: 1,
};
const Hero = () => {
  const searchButtonRef = useRef(null);

  return (
    <Fragment>
      {/*  Hero Start */}
      <div className="py-5 mb-5 hero-header bg-hero hero-style">
        <div className="container mx-auto py-5">
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
            <div className="flex flex-col justify-start gap-10 w-full lg:w-1/2 px-10 lg:px-2">
              <h4 className="mb-3 text-accent text-2xl lg:text-3xl font-semibold">
                {data?.hero_subtitle}
              </h4>
              <h1 className="mb-5 text-secondary text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {data?.hero_title}
              </h1>
              <div className="relative mx-auto w-full">
                <input
                  className="form-control outline-none outline-2 outline-secondary/25 focus:outline-4 focus:outline-secondary/50 w-full py-4 px-5 rounded-full"
                  type="search"
                  placeholder="Enter product or company name"
                />
                <button
                  type="submit"
                  className="transition-all ease-in-out absolute bg-secondary h-14 w-14 rounded-full text-primary hover:text-accent flex justify-center items-center"
                  style={{ top: 0, bottom: 0, right: 0 }}
                  ref={searchButtonRef}
                >
                  <MagnifyingGlassIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 rounded-lg">
              <Splide aria-label="My Favorite Images" options={slideOptions}>
                {slideData?.map((slide, index) => (
                  <SplideSlide
                    key={index}
                    className={
                      "bg-accent rounded-lg relative flex items-center justify-center"
                    }
                  >
                    <img
                      src={slide?.image}
                      alt={slide?.title}
                      className="rounded-lg w-full h-full"
                    />
                    <a
                      href={slide?.link}
                      className="bg-accent/70 hover:bg-accent/90 py-3 px-6 w-fit text-center font-bold rounded-lg text-primary absolute mx-auto bottom-[40%]"
                    >
                      <p>{slide?.buttonText}</p>
                    </a>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
        {/*  Hero End */}
      </div>
    </Fragment>
  );
};

export default Hero;
