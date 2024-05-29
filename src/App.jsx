import { Routes, Route } from "react-router-dom";

import { UserLayout } from "./layouts";
import { Homepage, Products, ErrorPage, ProductDetails } from "./pages";
// import { HomePage, Products, ProductDetail, ErrorPage } from "./pages";

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
