import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Create from "./components/Create";
import Explore from "./components/Explore";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
