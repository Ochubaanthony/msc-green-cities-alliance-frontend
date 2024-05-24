import { Fragment } from "react";

import {
  // MagnifyingGlassIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Assets
import baner1 from "../assets/img/hero-img-1.png";
import baner2 from "../assets/img/hero-img-2.jpg";
// import { data } from "../assets/data/constants";

const slideData = [
  {
    title: "Organic Veggies & Fruits Foods",
    description: "",
    image: baner1,
    link: "#",
    type: "vegetable",
    buttonText: "Shop Now",
  },
  {
    title: "Organic Veggies & Fruits Foods",
    description: "",
    image: baner2,
    link: "#",
    type: "vegetable",
    buttonText: "Shop Now",
  },
  {
    title: "Organic Veggies & Fruits Foods",
    description: "",
    image: baner2,
    link: "#",
    type: "vegetable",
    buttonText: "Shop Now",
  },
  {
    title: "Organic Veggies & Fruits Foods",
    description: "",
    image: baner2,
    link: "#",
    type: "vegetable",
    buttonText: "Shop Now",
  },
  {
    title: "Organic Veggies & Fruits Foods",
    description: "",
    image: baner2,
    link: "#",
    type: "vegetable",
    buttonText: "Shop Now",
  },
];

const slideOptions = {
  type: "loop",
  rewind: true,
  width: "100%",
  gap: "1rem",
  autoplay: true,
  perPage: 3,
};

const Organics = () => {
  const handleVote = (product_id) => {
    console.log("Voted");
    // console.log(product_id);
    alert(product_id);
  };
  return (
    <Fragment>
      {/* Vesitable Shop Start */}
      <div className="container mx-auto block justify-center items-center vesitable py-5">
        <div className="place-self-start text-start text-shade mb-5">
          <div className="text-3xl place-self-start text-start font-semibold text-shade mb-5">
            <h1 className="py-5 ">Fresh Organic Vegetables</h1>
          </div>

          <Splide aria-label="My Favorite Images" options={slideOptions}>
            {slideData?.map((slide, index) => (
              <SplideSlide
                key={index}
                className={"relative flex items-center justify-center"}
              >
                <div className="border border-secondary rounded-lg relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src={slide?.image}
                      className="max-w-[100%] h-auto w-full rounded-t-lg"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-secondary px-3 py-1 rounded-lg absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    {slide?.type}
                  </div>
                  <div className="p-4 rounded-bottom space-y-5">
                    <a href={slide?.link} className="text-4xl font-bold">
                      Parsely
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="flex justify-between items-center lg:flex-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0 text-3xl font-bold">
                        £4.99 / kg
                      </p>
                      <button
                        className="block items-center justify-center btn border border-secondary rounded-pill py-2 px-6 rounded-full text-primary bg-accent"
                        onClick={() => handleVote(slide?.id)}
                      >
                        Vote
                        <HandThumbUpIcon className="text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      {/*  Vesitable Shop End */}
    </Fragment>
  );
};

export default Organics;
