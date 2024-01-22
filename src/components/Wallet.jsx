import React, { useEffect } from "react";
import Comp1 from "./Comp1";
import Nav from "./Nav";

const Wallet = ({ title }) => {
    useEffect(() => {
        document.title = "FuseNFT - Wallet";
        return () => {
            document.title = "FuseNFT - Wallet";
        };
    }, [title]);
    return (
        <>
            <Nav />
            <Comp1 />
        </>
    );
};

export default Wallet;
