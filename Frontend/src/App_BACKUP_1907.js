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
<<<<<<< HEAD
import Register from "./User/Register";
=======
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
>>>>>>> 8ccdbc580a4342933ab0b2d86f3b613fb4fac31f
const App = () => {
  return (
    <div>
      <Provider store={store}>
<<<<<<< HEAD
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
=======
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <BasicLayout>
                <Home />
              </BasicLayout>
            }
          />
          <Route
            path="/popular"
            element={
              <BasicLayout>
                <Popular />
              </BasicLayout>
            }
          />
          <Route
            path="/latest"
            element={
              <BasicLayout>
                <Latest />
              </BasicLayout>
            }
          />
          <Route
            path="/upcomming"
            element={
              <BasicLayout>
                <Upcomming />
              </BasicLayout>
            }
          />
          <Route
            path="/wishlist"
            element={
              <BasicLayout>
                <Wishlist />
              </BasicLayout>
            }
          />
          <Route
            path="/searched"
            element={
              <BasicLayout>
                <Searched />
              </BasicLayout>
            }
          />
        </Routes>
>>>>>>> 8ccdbc580a4342933ab0b2d86f3b613fb4fac31f
      </Provider>
    </div>
  );
};

export default App;
