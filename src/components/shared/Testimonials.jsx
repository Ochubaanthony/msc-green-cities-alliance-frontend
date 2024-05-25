import { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { FaQuoteRight, FaStar } from "react-icons/fa";
import { data } from "../../components/assets/data/constants";
import { useWindowSize } from "../../hooks";
import { slidesPerPageSize } from "../../utils";

// Testimonial Start
let testimonialData = data.user_testimonials;
const Testimonials = () => {
  const windowSize = useWindowSize();

  const slideOptions = {
    type: "loop",
    rewind: true,
    width: "100%",
    gap: "1rem",
    autoplay: true,
    perPage: slidesPerPageSize(windowSize),
  };

  return (
    <Fragment>
      {/* Testimonial Start */}
      <div className="columns-1 testimonial py-10 px-2 lg:px-5 mb-10">
        <div className="py-5">
          <div className="testimonial-header text-center space-y-5 mb-10">
            <h4 className="text-secondary text-3xl font-bold">
              Our Testimonial
            </h4>
            <h1 className="text-5xl mb-5 text-shade font-bold">
              Our Client Saying!
            </h1>
          </div>
          <Splide
            hasTrack={true}
            aria-label="Fresh Organic Vegetables"
            options={slideOptions}
          >
            {testimonialData?.map((testimonial, index) => (
              <SplideSlide key={index + 1}>
                <div className="item testimonial-item img-border-radius bg-shade/10 rounded-lg p-4">
                  <div className="relative">
                    <FaQuoteRight
                      className="text-accent absolute"
                      style={{ bottom: "30px", right: 0 }}
                      size={50}
                    />
                    <div className="mb-4 pb-4 border-b border-accent text-shade">
                      <p className="mb-0">
                        {testimonial?.comment.slice(0, 100)}...
                      </p>
                    </div>
                    <div className="flex items-center flex-nowrap">
                      <div className="bg-secondary rounded-md">
                        <img
                          src={testimonial?.photo}
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 block">
                        <h4 className="text-shade text-2xl font-semibold">
                          {testimonial?.name}
                        </h4>
                        <p className="m-1 pb-3 text-shade">
                          {testimonial?.title}
                        </p>
                        <div className="flex pe-5">
                          {Array(testimonial?.rating)
                            .fill()
                            .map((rate, index) => (
                              <FaStar
                                Fragment
                                key={index + 1}
                                size={15}
                                className="text-secondary"
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      {/*  Tastimonial End */}
    </Fragment>
  );
};

export default Testimonials;
