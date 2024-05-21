import { Fragment } from "react";

import img3 from "../assets/img/featur-3.jpg";
import img2 from "../assets/img/featur-2.jpg";
import img1 from "../assets/img/featur-1.jpg";
const Featured = () => {
  return (
    <Fragment>
      {/* Features Start */}
      <div className="flex item-center justify-center service py-5">
        <div className="flex flex-col justify-start items-center lg:px-14 mx-auto py-5 px-5 gap-4">
          <div className="place-self-start text-start text-3xl font-semibold text-shade mb-5">
            <h1>Our Featured Products</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center featured-items">
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-accent rounded-lg border border-accent">
                  <img
                    src={img1}
                    // src="../assets/img/featur-1.jpg"
                    className="img-fluid rounded-t-lg w-full"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-secondary text-center p-4 rounded-lg">
                      <h5 className="text-white text-xl font-bold">
                        Fresh Apples
                      </h5>
                      <h3 className="mb-0 text-shade  text-2xl lg:text-3xl font-bold">
                        20% OFF
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-shade rounded-lg border border-shade">
                  <img
                    src={img2}
                    // src="../assets/img/featur-2.jpg"
                    className="img-fluid rounded-t-lg w-full"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded-lg">
                      <h5 className="text-secondary text-xl font-bold ">
                        Tasty Fruits
                      </h5>
                      <h3 className="mb-0 text-shade  text-2xl lg:text-3xl font-bold">
                        Free delivery
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-secondary rounded-lg border border-secondary">
                  <img
                    src={img3}
                    // src="../assets/img/featur-3.jpg"
                    className="img-fluid rounded-t-lg w-full"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-accent text-center p-4 rounded-lg">
                      <h5 className="text-white text-xl font-bold ">
                        Exotic Vegitable
                      </h5>
                      <h3 className="mb-0 text-shade  text-2xl lg:text-3xl font-bold">
                        Discount 30$
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  Features End  */}
    </Fragment>
  );
};

export default Featured;
