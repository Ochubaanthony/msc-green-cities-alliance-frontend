import { Fragment, useEffect, useState } from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// Data
import { data } from "../assets/data/constants";

import paymentLogo from "../assets/img/payment.png";

const Footer = () => {
  // Back to top button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
      console.log(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {/*  Footer Start */}
      <div className=" bg-shade p-2 md:px-5 md:py-2 lg:p-8">
        <div className="px-2 py-20 md:px-5 md:py-2 lg:p-8">
          <div
            className="pb-6 mb-6"
            style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="col-lg-3 place-self-start">
                <h1 className="text-primary mb-0 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
                  {data?.project_title}
                </h1>
                <p className="mb-2 text-accent text-md font-normal">
                  {data?.project_slogan}
                </p>
              </div>
              <div className="w-full md:w-full lg:w-[45%]">
                <div className="relative mx-auto  md:w-[80%] lg:w-full">
                  <input
                    className="form-control outline-none focus:outline-4 focus:outline-secondary/25 w-full py-4 px-5 rounded-full"
                    type="email"
                    placeholder="Your Email"
                  />
                  <button
                    type="submit"
                    className="bg-secondary hover:bg-accent transition-all ease-in-out border-none border-accent py-4 px-5 absolute rounded-full text-white focus:outline focus:outline-4 focus:outline-secondary  outline-offset-0 font-bold"
                    style={{ top: 0, right: 0 }}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div className="place-self-end lg:place-self-start">
                <div className="flex gap-2 pt-3">
                  <a
                    className="btn btn-md-square btn-outline-secondary me-2 rounded-circle outline  outline-1 outline-accent text-accent rounded-full border-accent hover:bg-accent hover:text-black  hover:border-accent"
                    href="/#"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="btn btn-md-square btn-outline-secondary me-2 rounded-circle outline  outline-1 outline-accent text-accent rounded-full border-accent hover:bg-accent hover:text-black  hover:border-accent"
                    href="/#"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="btn btn-md-square btn-outline-secondary me-2 rounded-circle outline  outline-1 outline-accent text-accent rounded-full border-accent hover:bg-accent hover:text-black  hover:border-accent"
                    href="/#"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="btn btn-md-square btn-outline-secondary me-2 rounded-circle outline  outline-1 outline-accent text-accent rounded-full border-accent hover:bg-accent hover:text-black  hover:border-accent"
                    href="/#"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-evenly gap-10 lg:gap-10">
            <div className="lg:w-1/4 col-lg-3 col-md-6">
              <div className="footer-item flex flex-col gap-2">
                <h4 className="mb-3 text-2xl font-bold text-white">
                  About us!
                </h4>
                <p className="mb-4 text-offwhite">
                  {data?.project_description}
                </p>
                <a
                  href="/about"
                  className="text-secondary hover:text-white outline outline-1 outline-accent hover:bg-accent font-bold px-8 py-3 rounded-full w-fit transition-all duration-700 ease-in-out"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="lg:w-1/4">
              <div className="flex flex-col gap-2">
                <h4 className="mb-3 text-2xl font-bold text-white">
                  Shop Info
                </h4>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  About Us
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  Contact Us
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  Privacy Policy
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  Terms & Condition
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  FAQs & Help
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/4  col-lg-3 col-md-6">
              <div className="flex flex-col gap-2">
                <h4 className="mb-3 text-2xl font-bold text-white">Account</h4>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  My Account
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  Shop details
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  Shopping Cart
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  Wishlist
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  Order History
                </a>
                <a
                  className="btn-link text-offwhite hover:text-accent transition-all duration-700 ease-in-out"
                  href="/#"
                >
                  International Orders
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/4 col-lg-3 col-md-6">
              <div className="footer-item flex flex-col gap-2 text-offwhite">
                <h4 className="mb-3 text-2xl font-bold text-white">Contact</h4>
                <p>Address: {data?.project_address}</p>
                <p>Email: {data?.project_email}</p>
                <p>Phone: {data?.project_phone}</p>
                <p>Payment Accepted</p>
                <img
                  src={paymentLogo}
                  className="img-fluid"
                  alt="Payment Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top  */}
      <button
        className={`bg-secondary hover:outline hover:outline-4 hover:outline-offset-0 outline-secondary/25 hover:ring-2 ring-emerald-400 hover:animate-pulse  items-center justify-center rounded-full back-to-top ${
          isVisible ? "flex" : "hidden"
        } `}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </Fragment>
  );
};

export default Footer;
