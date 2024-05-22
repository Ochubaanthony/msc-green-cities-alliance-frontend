import { Fragment } from "react";
import img from "../assets/img/baner-1.png";

const Banner = () => {
  return (
    <Fragment>
      {/*  Banner Section Start */}
      <div className="w-full banner bg-accent mt-10 py-10">
        <div className="container mx-auto py-5">
          <div className="flex flex-col-reverse lg:flex-row  gap-4 items-center justify-between  px-5">
            <div className="">
              <div className="py-5">
                <h1 className="text-white font-bold text-5xl lg:text-7xl">
                  Fresh Exotic Fruits
                </h1>
                <p className="text-shade font-normal mb-4 text-5xl lg:text-7xl">
                  in Our Store
                </p>
                <p className="mb-4 text-shade">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <a
                  href="#"
                  className="banner-btn btn rounded-full px-8 py-3 border-2 border-primary text-shade hover:bg-secondary transition-all duration-500 ease-in-out"
                >
                  BUY
                </a>
              </div>
            </div>
            <div className="">
              <div className="relative">
                <img
                  src={img}
                  className="max-w-[100%] h-auto w-full rounded-md"
                  alt=""
                />
                <div
                  className="flex items-center justify-center bg-white text-shade rounded-full absolute"
                  style={{ width: "140px", height: "140px", top: 0, left: 0 }}
                >
                  <h1 className="font-bold" style={{ fontSize: "100px" }}>
                    1
                  </h1>
                  <div className="flex flex-col">
                    <span className="h2 text-4xl font-bold mb-0">50$</span>
                    <span className="h4 text-muted  text-2xl font-bold mb-0">
                      kg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section End */}
    </Fragment>
  );
};

export default Banner;
