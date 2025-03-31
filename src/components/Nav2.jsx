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

const Nav = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleScroll = () => {
        const navContainer = document.querySelector(".nav-container");
        if (navContainer) {
            const scrolled = window.scrollY;
            if (scrolled > 0) {
                navContainer.classList.add("scrolled");
            } else {
                navContainer.classList.remove("scrolled");
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="nav-container">
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="hamburger">☰</span>
            </div>
            <section className="nav-logo">
                <img
                    src={logo2}
                    alt="logo"
                    className="logo-img"
                    onClick={() => navigate(`/`)}
                />
            </section>
            <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <li
                    className="li-items"
                    onClick={() => navigate(`/Marketplace`)}
                >
                    Marketplace
                </li>
                <li className="li-items" onClick={() => navigate(`/Explore`)}>
                    Explore
                </li>
                <li className="li-items" onClick={() => navigate(`/Wallet`)}>
                    Wallet
                </li>
                <li className="li-items" onClick={() => navigate(`/About`)}>
                    About
                </li>
            </ul>
            <div className="nav-profile">
                {/* <input
                    className="search-input"
                    id="searchbar"
                    placeholder="Search for NFT's"
                /> */}
                <BootstrapTooltip title="Sign Up to Buy NFT's">
                    <button
                        className="login-btn"
                        onClick={() => navigate(`/SignUp`)}
                    >
                        Get Started
                    </button>
                </BootstrapTooltip>
            </div>
        </div>
    );
};

export default Nav;

const styles = `
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.menu-icon {
    display: none;
    cursor: pointer;
    font-size: 24px;
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        text-align: center;
        padding: 10px 0;
    background-color: rgba(6, 2, 23, 0.25);    gap: 20px;
    }

    .nav-menu.open {
        display: flex;
    }

    .menu-icon {
        display: block;
    }
}
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
