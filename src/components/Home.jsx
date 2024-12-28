import React, { useEffect } from "react";
import HomeCarousel from "./Carousel";
import Footer from "./Footer";
import Homecards from "./Homecards";
import Nav from "./Nav";

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
                <HomeCarousel />
                <Homecards />
                <Footer />
            </div>
        </>
    );
};

export default Home;
