import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import logo2 from "../assets/fusenftimg.png";

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontSize: "16px",
        padding: "12px",
        borderRadius: "5px",
    },
}));
const Nav2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="nav-container">
                <section className="nav-logo">
                    <img
                        src={logo2}
                        alt="logo"
                        className="logo-img"
                        onClick={() => {
                            navigate(`/`);
                        }}
                    />
                </section>
                <ul className="nav-menu">
                    <li
                        className="li-items"
                        onClick={() => {
                            navigate(`/Marketplace`);
                        }}
                    >
                        Marketplace
                    </li>
                    <li
                        className="li-items"
                        onClick={() => {
                            navigate(`/Explore`);
                        }}
                    >
                        Explore
                    </li>
                    <li
                        className="li-items"
                        onClick={() => {
                            navigate(`/Wallet`);
                        }}
                    >
                        Wallet
                    </li>
                    <li
                        className="li-items"
                        onClick={() => {
                            navigate(`/About`);
                        }}
                    >
                        About
                    </li>
                </ul>
                <div className="nav-profile">
                    <input
                        className="search-input"
                        id="searchbar"
                        placeholder="Search for NFT's"
                    />
                    <BootstrapTooltip title="Sign Up to Buy NFT's">
                        <button
                            className="login-btn"
                            onClick={() => {
                                navigate(`/SignUp`);
                            }}
                        >
                            Get Started
                        </button>
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Sign In">
                        <img
                            src={avatar}
                            alt="logo"
                            className="avatar-img"
                            onClick={() => {
                                navigate(`/SignIn`);
                            }}
                        />
                    </BootstrapTooltip>
                </div>
            </div>
        </>
    );
};

export default Nav2;
