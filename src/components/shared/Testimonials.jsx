import { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Fragment>
      {/* Tastimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <OwlCarousel
            className="owl-theme owl-carousel testimonial-carousel"
            items={3}
            autoplay={true}
            smartSpeed={2000}
            center={true}
            dots={true}
            loop={true}
            margin={25}
            nav={true}
            navText={["Prev", "Next"]}
            responsiveClass="true"
            responsive={{
              0: {
                items: 1,
              },
              576: {
                items: 1,
              },
              768: {
                items: 1,
              },
              992: {
                items: 2,
              },
              1200: {
                items: 2,
              },
            }}
          >
            <div className="item testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <FaQuoteRight
                  className="text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                  size={50}
                />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry&lsquo;s standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/src/assets/img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <FaQuoteRight
                  className="text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                  size={50}
                />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry&lsquo;s standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/src/assets/img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} />
                      <FaStar size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <FaQuoteRight
                  className="text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                  size={50}
                />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry&lsquo;s standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/src/assets/img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <FaQuoteRight
                  className="text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                  size={50}
                />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry&lsquo;s standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/src/assets/img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                      <FaStar size={15} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/*  Tastimonial End */}
    </Fragment>
  );
};

export default Testimonials;
