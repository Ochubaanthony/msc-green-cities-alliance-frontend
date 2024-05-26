import { Fragment, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
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
import { Button } from "@/components/ui/button";

import { useProductCategory } from "../../hooks";

import img from "../assets/img/best-product-1.jpg";
import img2 from "../assets/img/best-product-2.jpg";
import img3 from "../assets/img/best-product-3.jpg";
import img4 from "../assets/img/best-product-4.jpg";
import img5 from "../assets/img/best-product-5.jpg";

const products = [
  {
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

const ProductsFull = () => {
  const [category, setCategory] = useState("");
  const [key, setKey] = useState(+new Date());
  const [value, setValue] = useState(undefined);
  const [sort, setSort] = useState("asc");

  const uniqueProductCategory = useProductCategory(products, "product_type");

  const filterProducts = (category) => {
    console.log(category);
    setValue(undefined);
    setCategory(category);
  };
  const filterProductsByPrice = (sortType) => {
    setSort(sortType);
  };

  const handleVote = (prodID) => {
    alert(prodID);
  };

  return (
    <Fragment>
      {/*   Fruits Shop Start */}
      <div className="flex justify-center items-start w-full fruite py-5">
        <div className="lg:flex justify-center items-center lg:px-14 mx-auto fruite py-5">
          <div className="tab-class text-center">
            <div className="flex flex-col lg:flex-row  justify-between items-center gap-4">
              <div className="text-start text-3xl font-semibold text-shade mb-5">
                <h1>Our Organic Products</h1>
              </div>

              <div className="flex gap-2 m-5">
                {/* Sort by price range */}
                <Select onValueChange={(e) => filterProductsByPrice(e)}>
                  <SelectTrigger className="lg:w-[280px] bg-primary">
                    <SelectValue defaultValue="" placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Price Range</SelectLabel>
                      <SelectItem value="asc">Low to High</SelectItem>
                      <SelectItem value="desc">High to Low</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                  </SelectContent>
                </Select>
                {/* Sort by Category */}
                <Select
                  key={key}
                  value={value}
                  onValueChange={(e) => filterProducts(e)}
                >
                  <SelectTrigger className="lg:w-[280px] bg-primary">
                    <SelectValue
                      defaultValue=""
                      placeholder="Select category"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {uniqueProductCategory?.map((prod, index) => (
                        <SelectItem key={index + 1} value={prod.product_type}>
                          {prod?.product_type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectSeparator />
                    <Button
                      className="w-full px-2 bg-secondary/20 hover:bg-secondary/40"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setValue(undefined);
                        setKey(+new Date());
                      }}
                    >
                      All
                    </Button>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="columns-1">
                    {/* Main Products Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 row gap-4 px-5 lg:px-0">
                      {products &&
                        products
                          ?.filter((prodCategory) =>
                            prodCategory?.product_type.includes(category)
                          )
                          .slice(0, 8)
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
                                  <h4 className="text-2xl font-bold">
                                    {product?.product_name}
                                  </h4>
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
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
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

export default ProductsFull;
