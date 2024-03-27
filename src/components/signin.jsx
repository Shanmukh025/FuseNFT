import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/fuselogo.png";
import Nav2 from "./Nav2";
const Signin = ({ title }) => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "FuseNFT - Sign In";
        return () => {
            document.title = "FuseNFT - Sign In";
        };
    }, [title]);
    return (
        <>
            <Nav2 />
            <div className="signupbox">
                <div className="signup-container">
                    <div className=" signup-container pic2"></div>
                    <img src={logo} alt="" />
                    <h1>Sign In</h1>
                    <div className="inp">
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="inp">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div></div>
                    <button type="submit">Login</button>
                    <div className="inp">
                        <label
                            style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: "16px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                navigate(`/SignUp`);
                            }}
                        >
                            New to FuseNFT? Create Account for free!
                        </label>
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
};

export default Signin;
