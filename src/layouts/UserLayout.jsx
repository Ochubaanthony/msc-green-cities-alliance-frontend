import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "../components";

const UserLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
