import { Fragment } from "react";
import { Head, HeadContent } from "../portals";

import { PageTitle, ProductsFull } from "../components";

const About = () => {
  return (
    <Fragment className="columns-1 mx-auto">
      <Head>
        <HeadContent>
          <title>Products page title from Portal</title>
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

      <PageTitle title="Shop" location="Products" />
      {/* <h2 className="text-center ">Welcome to Products</h2> */}
      <ProductsFull />
    </Fragment>
  );
};

export default About;
