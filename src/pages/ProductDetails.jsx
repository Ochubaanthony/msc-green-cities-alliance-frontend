import { Fragment } from "react";
import { Head, HeadContent } from "../portals";
import { useParams } from "react-router-dom";

import { PageTitle, ProductDetails } from "../components";

const ProductDetail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Fragment>
      <Head>
        <HeadContent>
          <title>Products Details page title from Portal</title>
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
      <PageTitle title="Product Details" location="Products" />
      <ProductDetails />
    </Fragment>
  );
};

export default ProductDetail;
