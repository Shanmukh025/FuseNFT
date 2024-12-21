import React, { useEffect } from "react";
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
            WALLET
        </>
    );
};

export default Wallet;
