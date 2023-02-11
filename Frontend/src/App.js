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
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
const App = () => {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  );
};

export default App;
