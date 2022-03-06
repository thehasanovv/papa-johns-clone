import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { mobile } from "../../style/responsive";

import styled from "styled-components";

import { images } from "./images";
import { mobileImages } from "./mobile-images";

const Slider = () => {
  return (
    <>
      <Container>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          emulateTouch={true}
          showArrows={false}
          infiniteLoop={true}
          showStatus={false}
        >
          {images.map((item) => (
            <div key={item.id}>
              <Image src={item.image} />
            </div>
          ))}
        </Carousel>
      </Container>
      {/* Mobile */}
      <MobileContainer>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          emulateTouch={true}
          showArrows={false}
          infiniteLoop={true}
          showStatus={false}
        >
          {mobileImages.map((item) => (
            <div key={item.id}>
              <Image src={item.image} />
            </div>
          ))}
        </Carousel>
      </MobileContainer>
    </>
  );
};

export default Slider;

const Container = styled.div`
  max-width: 1390px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  margin-bottom: 30px;

  ${mobile({ display: "none" })}
`;

const Image = styled.img`
  margin-bottom: 50px;
  ${mobile({ height: "410px", marginBottom: "40px" })};
`;

const MobileContainer = styled.div`
  display: none;
  height: 65vh;
  ${mobile({ display: "block" })};
`;
