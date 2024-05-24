import { Fragment } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { data } from "../assets/data/constants";
import { useWindowSize } from "../../hooks";
import { slidesPerPageSize } from "../../utils";

let slide_data = data;

const Organics = () => {
  const windowSize = useWindowSize();

  const slideOptions = {
    type: "loop",
    rewind: true,
    width: "100%",
    gap: "1rem",
    autoplay: true,
    perPage: slidesPerPageSize(windowSize),
  };

  const handleVote = (product_id) => {
    console.log("product_id", product_id);
  };
  return (
    <Fragment>
      {/* Vesitable Shop Start */}
      <div className="columns-1 vesitable py-5 px-10">
        <div className="place-self-start text-start text-shade mb-5">
          <div className="text-3xl place-self-start text-start font-semibold text-shade mb-5">
            <h1 className="py-5 lg:px-3">Fresh Organic Vegetables</h1>
          </div>

          <Splide
            hasTrack={true}
            aria-label="Fresh Organic Vegetables"
            options={slideOptions}
          >
            {slide_data?.product_data?.map((slide, index) => (
              <SplideSlide
                key={index}
                className={"relative flex items-center justify-center p-2"}
              >
                <div className="border-2 border-secondary rounded-xl relative vesitable-item hover:shadow-lg">
                  <div className="vesitable-img">
                    <img
                      src={slide?.image}
                      className="max-w-[100%] h-auto w-full rounded-t-sm"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-secondary px-3 py-1 rounded-lg absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    {slide?.type}
                  </div>
                  <div className="p-4 rounded-b space-y-5">
                    <a href={slide?.link} className="text-4xl font-bold">
                      {slide?.name}
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
                        className="flex items-center justify-between gap-2 btn border border-accent py-2 px-6 rounded-full text-secondary hover:bg-accent hover:text-primary"
                        onClick={() => handleVote(slide?.id)}
                      >
                        Vote
                        <FaRegThumbsUp className="text-inherit" />
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
