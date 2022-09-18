import React from 'react'
import HomePage from './pages/home.page'
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="relative top-36">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:id" element={<HomePage />}></Route>

          {/* <Route path="/about" element={<Aboutpage />}></Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default App