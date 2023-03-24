import React from "react";
import Footer from "./Footer";
import MenuAppBar from "./MenuAppBar";
import HeaderNavbar from "./HeaderNavbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderNavbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
