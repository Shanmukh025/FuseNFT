import { default as React, useEffect } from "react";
import Nav from "./Nav";

const Trending = ({ title }) => {
    useEffect(() => {
        document.title = "FuseNFT - New and Trending";
        return () => {
            document.title = "FuseNFT - New and Trending";
        };
    }, [title]);
    return (
        <>
            <Nav />
        </>
    );
};

export default Trending;
