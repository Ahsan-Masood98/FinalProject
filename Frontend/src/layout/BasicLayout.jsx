import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default BasicLayout;
