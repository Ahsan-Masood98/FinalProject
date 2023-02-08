import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/Header/SearchBar";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SearchBar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default BasicLayout;
