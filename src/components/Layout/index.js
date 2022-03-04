import { Fragment } from "react";
import AuthModal from "../UI/Modal/AuthModal";
import ProductModal from "../UI/Modal/ProductModal";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ProductModal />
      <AuthModal />
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
