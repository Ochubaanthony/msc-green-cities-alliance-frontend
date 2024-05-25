import { Fragment, useEffect, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaRegUserCircle,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoHeartCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import { PreLoader } from "../";
import { data } from "../assets/data/constants";
import { SearchModal } from "../";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleModal = () => {
    return setIsOpen((prevState) => !prevState);
  };
  const toggleMobileMenu = () => {
    console.log(isMenuOpen);
    return setMenuIsOpen((prevState) => !prevState);
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
        className={`w-full sticky bg-primary top-0 fixed-top z-40 ${
          isScrolled ? "shadow" : ""
        }`}
      >
        <div className="columns-1 mx-auto w-[90%] h-[50px] topbar bg-secondary hidden lg:flex lg:items-center lg:justify-center">
          <div className="flex w-full justify-between items-center">
            <div className="top-info ps-2">
              <small className="me-3 flex items-center text-white">
                <FaMapMarkerAlt className="me-2 text-inherit" />
                <p href="#" className="text-inherit">
                  {data?.project_address}
                </p>
              </small>
              <small className="me-3 flex items-center text-white hover:text-accent transition-all duration-500 ease-in-out">
                <FaEnvelope className="me-2 text-inherit" />
                <Link
                  href={`mailto:${data?.project_email}`}
                  className="text-inherit"
                >
                  {data?.project_email}
                </Link>
              </small>
            </div>
            <div className="top-link  pe-2">
              <NavLink
                href={`${data?.privacy_policy}`}
                className="text-white hover:text-accent"
              >
                <small className="text-inherit mx-2 ">Privacy Policy /</small>
              </NavLink>
              <NavLink
                href={`${data?.terms_and_conditions}`}
                className="text-white hover:text-accent"
              >
                <small className="text-inherit mx-2 ">Terms of Use /</small>
              </NavLink>
              <NavLink
                href={`${data?.sales_and_refund}`}
                className="text-white hover:text-accent"
              >
                <small className="text-inherit ms-2 ">Sales and Refunds</small>
              </NavLink>
            </div>
          </div>
        </div>
        <nav
          className="columns-1 flex justify-between items-center px-5 h-20 lg:px-14"
          role="navigation"
        >
          <NavLink href="/" className="mt-5 lg:mt-0">
            <h1 className="font-bold text-4xl text-secondary">G C A</h1>
          </NavLink>
          <div className="hidden lg:flex justify-between gap-10 items-center text-shade">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
            >
              Contact
            </NavLink>
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
                <div
                  className="absolute bg-accent rounded-full flex items-center justify-center text-dark text-sm"
                  style={{
                    top: "-5px",
                    left: "20px",
                    height: "24px",
                    minWidth: "24px",
                    padding: "2px",
                  }}
                >
                  <span>30</span>
                </div>
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
          <div className="lg:hidden ring-4 ring-secondary/25 rounded-sm mt-5">
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              onClick={toggleMobileMenu}
            >
              <FaBars className="text-secondary" size={20} />
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <MobileMenu
            toggleModal={toggleModal}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}
      </div>
      {/* Search Modal */}
      <SearchModal isOpen={isOpen} setIsOpen={toggleModal} />
      {/* PreLoader */}
      <PreLoader />
      {/* Navbar End */}
    </Fragment>
  );
};

export default Nav;

const MobileMenu = ({ toggleModal, toggleMobileMenu }) => {
  return (
    <div className="absolute lg:hidden bg-white w-full border-t border-secondary/25 flex justify-start items-center py-5 px-5 z-50 animate-dropdown">
      {/* Mobile Menu  */}
      <div className="">
        <ul className="flex flex-col gap-6 text-shade">
          <li className="hover:text-secondary transition-all duration-500 ease-in-out">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-secondary transition-all duration-500 ease-in-out">
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
              onClick={toggleMobileMenu}
            >
              Products
            </NavLink>
          </li>
          <li className="hover:text-secondary transition-all duration-500 ease-in-out">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
              onClick={toggleMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className="hover:text-secondary transition-all duration-500 ease-in-out">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold"
                  : "nav-item nav-link active hover:text-secondary font-semibold"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-5 justify-evenly  items-center p-3">
          <button
            className="focus:ring-4 ring-secondary/25 rounded-full h-12 w-12 border border-accent btn-md-square bg-primary hover:bg-accent transition-all duration-500 ease-in-out"
            onClick={() => {
              toggleModal();
              toggleMobileMenu();
            }}
          >
            <FaSearch size={20} className="text-secondary" />
          </button>
          <NavLink
            to="/favourites"
            id="fav"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-secondary font-semibold relative"
                : " text-secondary font-semibold relative"
            }
            onClick={toggleMobileMenu}
          >
            <div>
              <IoHeartCircleOutline size={40} className="text-inherit" />
            </div>
            <span
              className="absolute bg-accent hover:text-primary rounded-full flex items-center justify-center text-shade text-xs"
              style={{
                top: "-5px",
                left: "20px",
                height: "24px",
                minWidth: "24px",
                padding: "2px",
              }}
            >
              30
            </span>
          </NavLink>
          <div className="flex gap-4 items-center">
            <NavLink
              to="/login"
              id="loginBt"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active nav-item nav-link text-accent font-semibold my-auto"
                  : "nav-item nav-link active hover:text-secondary font-semibold my-auto"
              }
              onClick={toggleMobileMenu}
            >
              <FaRegUserCircle size={30} className="text-secondary" />
            </NavLink>
            <button className="my-auto btn" id="logoutBt">
              <IoLogOutOutline size={30} className="text-accent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  /**
   *
   * You can declare that a prop is a specific JS primitive. By default, these
   * are all optional.
   * optionalArray: PropTypes.array,
   * optionalBigInt: PropTypes.bigint,
   * optionalBool: PropTypes.bool,
   * optionalFunc: PropTypes.func,
   * optionalNumber: PropTypes.number,
   * optionalObject: PropTypes.object,
   * optionalSymbol: PropTypes.symbol,
   *
   * Anything that can be rendered: numbers, strings, elements or an array
   * (or fragment) containing these types.
   * see https://reactjs.org/docs/rendering-elements.html for more info
   * optionalNode: PropTypes.node,
   * optionalElement: PropTypes.element,
   * title: PropTypes.string,
   *
   *
   */
  toggleMobileMenu: PropTypes.func,
  toggleModal: PropTypes.func,
};
