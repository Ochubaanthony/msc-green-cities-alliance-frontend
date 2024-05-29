import { Fragment, useState } from "react";
import { FaSearch, FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

import { useProductCategory } from "../../hooks";

import img from "../assets/img/best-product-1.jpg";
import img2 from "../assets/img/best-product-2.jpg";
import img3 from "../assets/img/best-product-3.jpg";
import img4 from "../assets/img/best-product-4.jpg";
import img5 from "../assets/img/best-product-5.jpg";
import featImage from "../assets/img/featur-1.jpg";
import featImage2 from "../assets/img/featur-2.jpg";
import featImage3 from "../assets/img/featur-3.jpg";
import bannerImage from "../assets/img/banner-fruits.jpg";

const products = [
  {
    id: 1,
    product_name: "Orange",
    product_description:
      "Apple is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 10,
    product_company: "Apple",
    product_type: "Fruit",
    // product_owner: "",
    product_img: img,
  },
  {
    id: 2,
    product_name: "Raspberry",
    product_description:
      "Banana is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 10,
    product_company: "Banana",
    product_type: "Fruit",

    // product_owner: "",
    product_img: img2,
  },
  {
    id: 3,
    product_name: "Banana",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 20,
    product_company: "Grapes",
    product_type: "Fruit",

    // product_owner: "",
    product_img: img3,
  },
  {
    id: 4,
    product_name: "Apricots",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 20,
    product_company: "Grapes",
    product_type: "Bread",

    // product_owner: "",
    product_img: img4,
  },
  {
    id: 5,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 30,
    product_company: "Grapes",
    product_type: "Bread",

    // product_owner: "",
    product_img: img5,
  },
  {
    id: 6,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 30,
    product_company: "Grapes",
    product_type: "Bread",

    // product_owner: "",
    product_img: img,
  },
  {
    id: 7,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 40,
    product_company: "Grapes",
    product_type: "Meat",

    // product_owner: "",
    product_img: img,
  },
  {
    id: 8,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 50,
    product_company: "Grapes",
    product_type: "Vegetables",

    // product_owner: "",
    product_img: img,
  },
  {
    id: 9,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 60,
    product_company: "Grapes",
    product_type: "Meat",

    // product_owner: "",
    product_img: img,
  },
  {
    id: 10,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit -Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 70,
    product_company: "",
    product_type: "Vegetables",

    // product_owner: "",
    product_img: img,
  },
  {
    id: 11,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 80,
    product_company: "Grapes",
    product_type: "Vegetables",

    // product_owner: "",
    product_img: img,
  },
  {
    id: 12,
    product_name: "Grapes",
    product_description:
      "Grapes is a fruit - Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    product_price: 80,
    product_company: "Grapes",
    product_type: "Vegetables",

    // product_owner: "",
    product_img: img,
  },
];

const featuredProducts = [
  {
    id: 1,
    product_name: "Big Orange",
    discount_price: 5,
    product_price: 10,
    rating: 2,
    product_img: featImage,
  },
  {
    id: 2,
    product_name: "Big Orange",
    discount_price: 30,
    product_price: 50,
    rating: 4,
    product_img: featImage2,
  },
  {
    id: 3,
    product_name: "Big Orange",
    discount_price: 70,
    product_price: 100,
    rating: 5,
    product_img: featImage3,
  },
];

const ITEMS_PER_PAGE = 9; // Adjust this number as needed

const ProductDetails = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(10000);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices of the first and last item on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  // Get the items for the current page
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // pagination start
  const renderPagination = () => {
    const pageNumbers = [];
    const pageBuffer = 1;

    // Add the first page
    pageNumbers.push(1);

    // Add pages around the current page
    let startPage = Math.max(currentPage - pageBuffer, 2);
    let endPage = Math.min(currentPage + pageBuffer, totalPages - 1);

    if (startPage > 2) {
      pageNumbers.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    // Add the last page
    pageNumbers.push(totalPages);

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              role="button"
              disabled={currentPage === 1}
              label={currentPage === 1 ? "Begin" : "Previous"}
              onClick={handlePreviousPage}
            />
          </PaginationItem>
          {pageNumbers.map((number, index) =>
            number === "..." ? (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem
                key={index}
                className={
                  number === currentPage
                    ? "active bg-secondary/25 rounded-md"
                    : ""
                }
                onClick={() => handlePageChange(number)}
              >
                <PaginationLink role="button">{number}</PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              role="button"
              disabled={currentPage === totalPages}
              label={currentPage === totalPages ? "Last" : "Next"}
              onClick={handleNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  // Pagination end
  const uniqueProductCategory = useProductCategory(products, "product_type");

  const filterProducts = (category) => {
    console.log(category);
    setCategory(category);
  };
  const filterProductsByPrice = (sortType) => {
    setSort(sortType);
  };

  const handleVote = (prodID) => {
    alert(prodID);
  };

  const handlePriceFilter = (e, state) => {
    if (state === "start") {
      setStartPrice(e[0]);
    }
    if (state === "end") {
      setEndPrice(e[0]);
    }
  };

  return (
    <Fragment>
      {/*   Fruits Shop Start */}
      <div className="flex flex-col w-full fruite py-5">
        <div className="lg:flex flex-row-reverse justify-center items-start lg:px-14 mx-auto fruite py-5 w-full gap-2">
          {/* Sidebar */}
          <div className="columns-1 rounded-lg lg:w-1/3 lg:min-h-screen px-5 lg:px-0 mx-5 lg:mx-0 my-5 lg:my-0">
            {/* Search Bar */}
            <div className="flex input-group w-full relative p-2">
              <Input
                type="search"
                placeholder="Search Company"
                aria-describedby="search-icon-1"
                className="form-control p-3 columns-span-2 pr-10"
              />
              <button
                id="search-icon-1"
                className="bg-secondary text-primary hover:bg-accent transition-all duration-500 ease-in-out input-group-text p-3 absolute right-2 rounded-r-md"
              >
                <FaSearch />
              </button>
            </div>
            {/* Category List */}
            <div className="hidden lg:block p-2 my-5">
              <div className="mb-3">
                <h4 className="text-3xl text-shade">Categories</h4>
                <ul className="list-unstyled fruite-categorie text-secondary">
                  {uniqueProductCategory?.map((prod, index) => (
                    <li key={index + 1} value={prod.product_type}>
                      <div className="flex justify-between fruite-name">
                        <a href="#">{prod?.product_type}</a>
                        <span className="text-shade">
                          ({Object.entries(prod?.product_type).length})
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price Slider */}
            <div className="my-5 p-2">
              <div className="mb-3">
                <h4 className="mb-2 text-3xl text-shade">Price Range</h4>
                <div>
                  <div className="flex gap-5 items-center justify-between">
                    <p className="text-shade">Start</p>
                    <Slider
                      defaultValue={[startPrice]}
                      max={9999}
                      step={10}
                      onValueChange={(e) => handlePriceFilter(e, "start")}
                    />
                    <p className="text-shade">£{startPrice}</p>
                  </div>
                  <div className="flex gap-5 items-center justify-between">
                    <p className="text-shade">End</p>
                    <Slider
                      defaultValue={[endPrice]}
                      max={10000}
                      step={100}
                      onValueChange={(e) => handlePriceFilter(e, "end")}
                    />
                    <p className="text-shade">£{endPrice}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block my-5 p-2">
              <h4 className="mb-3 text-3xl text-shade">Featured products</h4>
              {featuredProducts?.map((featuredProduct, index) => (
                <div
                  key={index + 1}
                  className="flex items-center justify-start "
                >
                  <div
                    className="rounded-md me-4"
                    style={{ width: "100px", height: "100px;" }}
                  >
                    <img
                      src={featuredProduct.product_img}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                  <div className="my-5 text-shade">
                    <Link
                      to={`/products/${featuredProduct.id}`}
                      className="mb-2 font-semibold"
                    >
                      {featuredProduct.product_name}
                    </Link>
                    <div className="flex mb-2">
                      {Array(featuredProduct?.rating)
                        .fill()
                        .map((rate, index) => (
                          <FaStar key={index + 1} className="text-accent" />
                        ))}
                    </div>
                    <div className="flex mb-2">
                      <h5 className="font-bold me-2">2.99 $</h5>
                      <h5 className="text-red-500 line-through font-bold">
                        4.11 $
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center my-5 p-2">
                <a
                  href="#"
                  className="flex justify-center items-center btn border border-accent hover:text-primary hover:bg-accent px-4 py-3 rounded-full text-secondary w-full"
                >
                  Vew More
                </a>
              </div>
            </div>
            <div className="hidden lg:block columns-1 p-2">
              <div className="relative">
                <img
                  src={bannerImage}
                  className="img-fluid w-full rounded-md"
                  alt=""
                />
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                >
                  <h3 className="text-3xl text-accent font-bold">
                    Fresh <br /> Fruits <br /> Banner
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-class text-center w-full">
            <div className="flex flex-col lg:flex-row  justify-between items-center gap-4 bg-secondary/20 p-3 rounded-lg mb-5 mx-5 lg:mx-0">
              <div className="flex justify-between items-center w-full gap-2 m-5 p-3">
                <div className="hidden lg:flex justify-center items-center text-shade h-8 w-8 lg:h-10 lg:w-10">
                  <AdjustmentsVerticalIcon className="text-shade" />
                </div>

                <div className="flex w-full justify-between lg:justify-end gap-2 items-center">
                  {/* Sort by price range */}
                  <Select onValueChange={(e) => filterProductsByPrice(e)}>
                    <SelectTrigger className="w-full lg:w-[280px] bg-primary text-shade">
                      <SelectValue defaultValue="" placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="text-shade">
                        <SelectLabel>Price Range</SelectLabel>
                        <SelectItem value="asc">Low to High</SelectItem>
                        <SelectItem value="desc">High to Low</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                    </SelectContent>
                  </Select>
                  {/* Sort by Category */}
                  <Select onValueChange={(e) => filterProducts(e)}>
                    <SelectTrigger className="w-full lg:w-[280px] bg-primary text-shade">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="text-shade">
                        <SelectLabel>Categories</SelectLabel>
                        <SelectItem value={"all"}>All</SelectItem>
                        {uniqueProductCategory?.map((prod, index) => (
                          <SelectItem key={index + 1} value={prod.product_type}>
                            {prod?.product_type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectSeparator />
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="columns-1">
                    {/* Main Products Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 row gap-4 px-5 lg:px-0">
                      {currentItems &&
                        currentItems
                          ?.filter((prodCategory) => {
                            if (category === "all") {
                              return prodCategory;
                            }
                            return prodCategory?.product_type.includes(
                              category
                            );
                          })
                          .slice(0, 9)
                          .sort((a, b) => {
                            if (sort === "asc") {
                              return a.product_price - b.product_price;
                            } else {
                              return b.product_price - a.product_price;
                            }
                          })
                          .map((product, index) => (
                            <div
                              key={index + 1}
                              className="col-md-6 col-lg-4 col-xl-3"
                            >
                              <div className="rounded-lg relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src={product?.product_img}
                                    className="max-w-full h-auto w-full rounded-t-md"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-accent px-3 py-1 rounded-lg absolute"
                                  style={{ top: "10px", left: "10px" }}
                                >
                                  {product?.product_type}
                                  {/* Fruits */}
                                </div>
                                <div className="flex flex-col gap-2 p-4 border border-accent border-t-0 rounded-b-lg text-shade">
                                  <Link
                                    to={`/products/${product.id}`}
                                    className="text-2xl font-bold"
                                  >
                                    {product?.product_name}
                                  </Link>
                                  <p className="">
                                    {product?.product_description}
                                  </p>
                                  <div className="flex flex-col items-center gap-2">
                                    <p className="text-2xl font-semibold mb-0 text-secondary">
                                      ${product?.product_price}/ kg
                                    </p>
                                    <button
                                      href="#"
                                      className="border border-accent rounded-full py-2 px-4 text-secondary hover:bg-accent hover:text-primary flex items-center gap-1 font-semibold transition-all duration-700 ease-in-out"
                                      onClick={() =>
                                        handleVote(product?.product_id)
                                      }
                                    >
                                      <FaThumbsUp className="me-2 text-inherit" />
                                      Vote
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
                <div className="columns-1 mt-10">
                  {/* <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          // href="#"
                          role="button"
                          onClick={handlePreviousPage}
                          disabled={currentPage === 1}
                        />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">{currentPage}</PaginationLink>
                      </PaginationItem>
                       <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem> 
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          // href="#"
                          role="button"
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination> */}

                  {renderPagination()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End */}
    </Fragment>
  );
};

export default ProductDetails;
