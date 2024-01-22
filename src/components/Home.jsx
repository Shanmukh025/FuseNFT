import React, { useEffect } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
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
                <Comp2 />
                <Comp3 />
                <Footer />
            </div>
        </>
    );
};

export default Home;
