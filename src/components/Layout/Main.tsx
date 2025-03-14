import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
