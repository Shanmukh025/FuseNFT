import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import Wallet from "./components/Wallet";
import Signin from "./components/signin";
import Signup from "./components/signup";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/Marketplace" element={<Marketplace />} />
                    <Route path="/Explore" element={<Explore />} />
                    <Route path="/Wallet" element={<Wallet />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/SignUp" element={<Signup />} />
                    <Route path="/SignIn" element={<Signin />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
