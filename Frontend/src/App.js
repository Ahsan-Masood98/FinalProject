import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Upcomming from "./pages/Upcomming";
import Wishlist from "./pages/Wishlist";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BasicLayout from "./layout/BasicLayout";
import Popular from "./pages/Popular";
import Searched from "./pages/Searched";
import Register from "./User/Register";
const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Routes>
      <Route path="/" element={<Register/>}/>
        <BasicLayout>
            <Route path="/home" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/upcomming" element={<Upcomming />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/searched" element={<Searched />} />
            </BasicLayout>
          </Routes>
      </Provider>
    </div>
  );
};

export default App;
