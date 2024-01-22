import React, { useEffect } from "react";
import Comp1 from "./Comp1";
import Nav from "./Nav";

const Create = ({ title }) => {
    useEffect(() => {
        document.title = "FuseNFT - Create Mode";
        return () => {
            document.title = "FuseNFT - Create Mode";
        };
    }, [title]);
    return (
        <>
            <Nav />
            <Comp1 />
        </>
    );
};

export default Create;
