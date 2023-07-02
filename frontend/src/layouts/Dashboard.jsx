import React from "react";
import { Routes, Route } from "react-router-dom";
import CityList from "../pages/CityList";
import CityDetail from "../pages/CityDetail";
import RestaurantDetail from '../pages/RestaurantDetail';


export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/city/:city" element={<CityDetail />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </div>
  );
}
