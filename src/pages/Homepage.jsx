import { Fragment } from "react";
import {
  //   Products,
  //   FeaturedProducts,
  //   Services,
  Hero,
  //   Organics,
  //   Banner,
  //   Testimonials,
} from "../components";

import { Head, HeadContent } from "../portals";

const Homepage = () => {
  return (
    <Fragment>
      <Head>
        <HeadContent>
          <title>Homepage title from Portal</title>
          <meta name="description" content="Homepage description from Portal" />
          <meta name="keywords" content="Homepage keywords from Portal" />
          <meta name="author" content="Homepage author from Portal" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="revisit-after" content="1 days" />
          <meta name="language" content="English" />
          <meta name="rating" content="General" />
          <meta name="distribution" content="Global" />
        </HeadContent>
      </Head>
      <Hero />
      {/*  <Services />
      <Products />
      <FeaturedProducts />
      <Organics />
      <Banner />
      <Testimonials /> */}
    </Fragment>
  );
};

export default Homepage;
