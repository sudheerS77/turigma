import React from 'react'
import HomePage from './pages/home.page'
import { Route, Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<HomePage />}></Route>

        {/* <Route path="/about" element={<Aboutpage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App