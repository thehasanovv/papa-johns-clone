import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import chiken from "../../assets/chiken-ranch-banner.png";
import combo from "../../assets/kombo-banner.jpg";
import odChershenbesi from "../../assets/odchershenbesi-banner.jpg";
import pizzaParty from "../../assets/pizza-party-sat-banner.png";
import discountAge from "../../assets/discountAge.jpg";
import twoBig from "../../assets/two-big-banner.png";
import styled from "styled-components";
import { mobile } from "../../style/responsive";

const Slider = () => {
  return (
    <Container>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
      >
        <div>
          <Image src={chiken} />
        </div>
        <div>
          <Image src={combo} />
        </div>
        <div>
          <Image src={odChershenbesi} />
        </div>
        <div>
          <Image src={discountAge} />
        </div>
        <div>
          <Image src={pizzaParty} />
        </div>
        <div>
          <Image src={twoBig} />
        </div>
      </Carousel>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  max-width: 1390px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  ${mobile({ minHeight: "160px" })}
`;
