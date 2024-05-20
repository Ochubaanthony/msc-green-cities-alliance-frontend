import { Routes, Route } from "react-router-dom";

// import { HomePage, Products, ProductDetail, ErrorPage } from "./pages";
import { Homepage } from "./pages";

import { UserLayout } from "./layouts";
const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="products" element={<Products />} /> */}
          {/* <Route path="products/:id" element={<ProductDetail />} /> */}
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </main>
  );
};

export default App;
