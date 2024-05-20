import { Fragment } from "react";
import {
  FaCarSide,
  FaExchangeAlt,
  FaPhoneAlt,
  FaUserShield,
} from "react-icons/fa";

const Services = () => {
  return (
    <Fragment>
      {/* Features Section Start */}
      <div className="container mx-auto featurs py-5 w-full">
        <div className="container mx-auto py-5 w-full">
          <div className="flex flex-col lg:flex-row gap-5 items-center justify-around px-5">
            <div className="flex justify-center items-center col-md-6 col-lg-3 bg-shade/5 p-5  rounded-lg w-full">
              <div className="featurs-item text-center rounded bg-light">
                <div className="featurs-icon btn-square rounded-full bg-accent mb-5 mx-auto">
                  <FaCarSide className="fa-3x text-white" size="50" />
                </div>
                <div className="featurs-content text-center">
                  <h5 className="text-shade text-xl font-bold mb-4">
                    Free Shipping
                  </h5>
                  <p className="mb-0 text-shade/50">Free on order over $300</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center col-md-6 col-lg-3 bg-shade/5 p-5  rounded-lg w-full">
              <div className="featurs-item text-center rounded bg-light">
                <div className="featurs-icon btn-square rounded-full bg-accent mb-5 mx-auto">
                  <FaUserShield className="fa-2x text-white" size="50" />
                </div>
                <div className="featurs-content text-center">
                  <h5 className="text-shade text-xl font-bold mb-4">
                    Security Payment
                  </h5>
                  <p className="mb-0 text-shade/50">100% security payment</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center col-md-6 col-lg-3 bg-shade/5 p-5   rounded-lg w-full">
              <div className="featurs-item text-center rounded bg-light">
                <div className="featurs-icon btn-square rounded-full bg-accent mb-5 mx-auto">
                  <FaExchangeAlt className="fa-3x text-white" size="50" />
                </div>
                <div className="featurs-content text-center">
                  <h5 className="text-shade text-xl font-bold mb-4">
                    30 Day Return
                  </h5>
                  <p className="mb-0 text-shade/50 ">30 day money guarantee</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center col-md-6 col-lg-3 bg-shade/5 p-5   rounded-lg w-full">
              <div className="featurs-item text-center rounded bg-light">
                <div className="featurs-icon btn-square rounded-full bg-accent mb-5 mx-auto">
                  <FaPhoneAlt className="fa-3x text-white" size="50" />
                </div>
                <div className="featurs-content text-center">
                  <h5 className="text-shade text-xl font-bold mb-4">
                    24/7 Support
                  </h5>
                  <p className="mb-0 text-shade/50 ">Support every time fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Features Section End  */}
    </Fragment>
  );
};

export default Services;
