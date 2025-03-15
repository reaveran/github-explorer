import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <Header />
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
