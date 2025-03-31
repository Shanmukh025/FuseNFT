import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/fuselogo.png";
import Nav2 from "./Nav2";
const Signup = ({ title }) => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "FuseNFT - Create Account";
        return () => {
            document.title = "FuseNFT - Create Account";
        };
    }, [title]);
    return (
        <>
            <Nav2 />
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
                    <div
                        className="inp"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <label
                            style={{
                                color: "white",
                                fontSize: "18px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                navigate(`/SignIn`);
                            }}
                        >
                            Already Registered? Login to FuseNFT.
                        </label>
                    </div>

                    <br />
                </div>
            </div>
        </>
    );
};

export default Signup;
