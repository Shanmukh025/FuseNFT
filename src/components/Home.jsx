import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Homecomp from "./Homecomp";

const Home = ({ title }) => {
    useEffect(() => {
        document.title = "FuseNFT - Buy NFT's Online";
        return () => {
            document.title = "FuseNFT - Buy NFT's Online";
        };
    }, [title]);
    return (
        <>
            <div className="home">
                <Nav />
                <Homecomp />
                <Footer />
            </div>
        </>
    );
};

export default Home;
