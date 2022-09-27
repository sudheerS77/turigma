import React from 'react'
import HomePage from './pages/home.page'
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="relative top-28">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:id" element={<HomePage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App