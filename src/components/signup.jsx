import React, { useEffect } from "react";
import logo from "../assets/fuselogo.png";
import Footer from "./Footer";
import Nav from "./Nav";

const Signup = ({ title }) => {
    useEffect(() => {
        document.title = "FuseNFT - Create Account";
        return () => {
            document.title = "FuseNFT - Create Account";
        };
    }, [title]);
    return (
        <>
            <Nav />
            <div className="signupbox">
                <div className="signup-container">
                    <div className=" signup-container pic2"></div>
                    <img src={logo} alt="" />
                    <h1>Let's Get Started...</h1>
                    <div className="inp">
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                        />
                    </div>
                    <div className="inp">
                        <input type="text" id="email" placeholder="Email ID" />
                    </div>
                    <div className="inp">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="inp">
                        <input
                            type="password"
                            id="password"
                            placeholder="Re-Enter Password"
                        />
                    </div>
                    <button type="submit">Create Account</button>
                    <br />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;
