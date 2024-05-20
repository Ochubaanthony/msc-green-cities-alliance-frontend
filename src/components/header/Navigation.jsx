import { Fragment, useEffect, useState } from "react";
import { FaBars, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { IoHeartCircleOutline, IoLogOutOutline } from "react-icons/io5";

import { PreLoader } from "../";
import { data } from "../assets/data/constants";
import { Modal } from "../";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    return setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;

      if (windowWidth < 992) {
        setIsScrolled(scrollPosition > 55);
      } else {
        setIsScrolled(scrollPosition > 55);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run this effect only once after component mounts

  return (
    <Fragment>
      {/* Navbar start */}
      <div
        className={`container mx-auto fixed-top ${isScrolled ? "shadow" : ""}`}
      >
        <div className="mx-auto w-full topbar bg-secondary hidden lg:block">
          <div className="flex justify-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
                <a href="#" className="text-white hover:text-accent">
                  {data?.project_address}
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a
                  href={`mailto:${data?.project_email}`}
                  className="text-white hover:text-accent"
                >
                  {data?.project_email}
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a
                href={`${data?.privacy_policy}`}
                className="text-white hover:text-accent"
              >
                <small className="text-white mx-2 ">Privacy Policy</small>/
              </a>
              <a
                href={`${data?.terms_and_conditions}`}
                className="text-white hover:text-accent"
              >
                <small className="text-white mx-2 ">Terms of Use</small>/
              </a>
              <a
                href={`${data?.sales_and_refund}`}
                className="text-white hover:text-accent"
              >
                <small className="text-white ms-2 ">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-30"> */}
        <nav
          className="flex justify-between  items-center px-5 h-20 lg:px-0"
          role="navigation"
        >
          <a href="/" className="">
            <h1 className="font-bold text-4xl text-secondary">G C A</h1>
          </a>
          <div className="hidden lg:flex justify-between gap-10 items-center text-shade">
            <a
              href="/"
              className="nav-item nav-link active hover:text-secondary"
            >
              Home
            </a>
            <a
              href="shop.html"
              className="nav-item nav-link hover:text-secondary"
            >
              Products
            </a>
            <a
              href="about.html"
              className="nav-item nav-link hover:text-secondary"
            >
              About Us
            </a>
            <a
              href="contact.html"
              className="nav-item nav-link hover:text-secondary"
            >
              Contact
            </a>
          </div>
          <div className="hidden lg:flex justify-around" id="navbarCollapse">
            <div className="flex gap-5 justify-evenly  items-center p-3">
              <button
                className="focus:ring-4 ring-secondary/25 rounded-full h-12 w-12 border border-accent btn-md-square bg-primary hover:bg-accent transition-all duration-500 ease-in-out"
                onClick={toggleModal}
              >
                <FaSearch size={20} className="text-secondary" />
              </button>
              <a href="cart.html" id="fav" className="relative">
                <div>
                  <IoHeartCircleOutline size={40} className="text-secondary" />
                </div>
                <span
                  className="absolute bg-accent rounded-full flex items-center justify-center text-dark p"
                  style={{
                    top: "-5px",
                    left: "15px",
                    height: "20px",
                    minWidth: "20px",
                  }}
                >
                  3
                </span>
              </a>
              <div className="flex gap-4 items-center">
                <a href="./login.html" className="my-auto" id="loginBt">
                  <FaRegUserCircle size={30} className="text-secondary" />
                </a>
                <button className="my-auto btn" id="logoutBt">
                  <IoLogOutOutline size={30} className="text-accent" />
                </button>
              </div>
            </div>
          </div>
          <button
            className="lg:hidden navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            onClick={toggleModal}
          >
            <FaBars className="text-secondary" size={20} />
          </button>
        </nav>
      </div>
      {/* Search Modal */}
      <Modal isOpen={isOpen} setIsOpen={toggleModal} />
      {/* PreLoader */}
      <PreLoader />
      {/* Navbar End */}
    </Fragment>
  );
};

export default Nav;
