import React from 'react'
import HomePage from './pages/home.page'
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div
      className="bg-gray-200"
      style={{
        background: "rgb(164,198,215)",
        background:
          "linear-gradient(60deg, rgba(164,198,215,1) 0%, rgba(237,243,246,1) 52%, rgba(164,198,215,1) 100%)",
      }}
    >
      <Navbar />
      <div className="relative top-20">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:id" element={<HomePage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App