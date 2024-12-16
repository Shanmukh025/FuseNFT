import React, { useState } from "react";

const Footer = () => {
    const [hover, setHover] = useState(false);

    return (
        <>
            <footer>
                <a
                    href="https://shanmukh25.vercel.app/"
                    style={{
                        color: "white",
                        fontSize: "1.1rem",
                        textDecoration: hover ? "underline" : "none",
                        transition: "text-decoration 0.3s ease",
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    Developed by Shanmukh.
                </a>
            </footer>
        </>
    );
};

export default Footer;
