import React from "react";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://miro.medium.com/v2/resize:fit:1400/1*3eYCTgI7TqmaD2N7T7jz1A.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Buy NFT's</h3>
                        <p>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://pixelplex.io/wp-content/uploads/2022/02/how-to-create-an-nft-marketplace-main-1600-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>NFT Marketplace</h3>
                        <p>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://public.bnbstatic.com/image/cms/blog/20220815/c88c8f9e-ab2b-4fb5-bda8-5e852f516f62"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>NFT</h3>
                        <p>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://miro.medium.com/v2/resize:fit:1400/1*fXHxhtZ_7xvbniwdCU7mhQ.png"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>NFT</h3>
                        <p>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default HomeCarousel;
