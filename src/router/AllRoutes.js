import React from "react";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeLightAnimation />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
