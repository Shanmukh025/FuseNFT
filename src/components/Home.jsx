import React, { useEffect } from "react";
import Comp1 from "./Comp1";
import Footer from "./Footer";
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
                <Comp1 />
                <Footer />
            </div>
        </>
    );
};

export default Home;
