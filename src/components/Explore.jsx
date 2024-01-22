import * as React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Explore = () => {
    return (
        <>
            <Nav />
            <div className="exp">
                <div className="explorecard">
                    <img
                        src="https://opensea.io/static/images/category-all-dark.png"
                        alt="all"
                        className="card__img"
                        style={{ marginTop: "-25px" }}
                    />
                    <span className="card__footer">
                        <span>ALL</span>
                        <span>100 NFT's</span>
                    </span>
                    <span className="card__action">
                        <svg viewBox="0 0 448 512" title="play">
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                        </svg>
                    </span>
                </div>
                <div className="explorecard">
                    <img
                        src="https://i.seadn.io/gcs/files/f5085bbbc2c52d230ccecb2b1a1504c9.jpg?auto=format&dpr=1&h=500"
                        alt="art"
                        className="card__img"
                        style={{ marginTop: "-35px" }}
                    />
                    <span className="card__footer">
                        <span>ART</span>
                        <span>10 NFT's</span>
                    </span>
                    <span className="card__action">
                        <svg viewBox="0 0 448 512" title="play">
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                        </svg>
                    </span>
                </div>
                <div className="explorecard">
                    <img
                        src="https://i.seadn.io/gcs/files/25059d629ad50cad3009a1f553a44401.jpg?auto=format&dpr=1&h=500"
                        alt="balloon with an emoji face"
                        className="card__img"
                        style={{ marginTop: "-25px" }}
                    />
                    <span className="card__footer">
                        <span>GAMING</span>
                        <span>15 NFT's</span>
                    </span>
                    <span className="card__action">
                        <svg viewBox="0 0 448 512" title="play">
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                        </svg>
                    </span>
                </div>
                <div className="explorecard">
                    <img
                        src="https://i.seadn.io/gcs/files/c5c3ff4a66c4c34f1c93333476162631.jpg?auto=format&dpr=1&h=500"
                        alt="balloon with an emoji face"
                        className="card__img"
                        style={{ marginTop: "-25px" }}
                    />
                    <span className="card__footer">
                        <span>MUSIC</span>
                        <span>25 NFT's</span>
                    </span>
                    <span className="card__action">
                        <svg viewBox="0 0 448 512" title="play">
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                        </svg>
                    </span>
                </div>
                <div className="explorecard">
                    <img
                        src="https://i.seadn.io/gae/X-wmwimqix_-2Wnfxm-aVYauKUy_aONVYFAI4nTTitG1WnOZ182vqgkKUMQ-XNLcQNKbVOX76OlL8iH_k_6MIirSYTbLQnCjSA-Zr88?auto=format&dpr=1&w=384"
                        alt="balloon with an emoji face"
                        className="card__img"
                        style={{ marginTop: "-25px" }}
                    />
                    <span className="card__footer">
                        <span>PHOTOGRAPHY</span>
                        <span>10 NFT's</span>
                    </span>
                    <span className="card__action">
                        <svg viewBox="0 0 448 512" title="play">
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                        </svg>
                    </span>
                </div>
                <div className="explorecard">
                    <img
                        src="https://i.seadn.io/s/raw/files/e7f6a2735321dfbad153ebef6d2333ca.jpg?auto=format&dpr=1&w=384"
                        alt="art"
                        className="card__img"
                    />
                    <span className="card__footer">
                        <span>PFP</span>
                        <span>15 NFT's</span>
                    </span>
                    <span className="card__action">
                        <svg viewBox="0 0 448 512" title="play">
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                        </svg>
                    </span>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Explore;
