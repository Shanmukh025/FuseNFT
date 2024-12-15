import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Create from "./components/Create";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Wallet from "./components/Wallet";
import Signin from "./components/signin";
import Signup from "./components/signup";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/Trending" element={<Trending />} />
                    <Route path="/Explore" element={<Explore />} />
                    <Route path="/Wallet" element={<Wallet />} />
                    <Route path="/Create" element={<Create />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/SignUp" element={<Signup />} />
                    <Route path="/SignIn" element={<Signin />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
