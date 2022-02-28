import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PromoCode from "../components/PromoCode";
import Container from "../components/Container";
import OffersItem from "../components/OffersItem";

import { offers } from "../sources/offers";

const Offers = () => {
  return (
    <>
      <Navbar />
      <PromoCode />
      <Container>
        <SectionTitle>Offers</SectionTitle>
        <OffersContainer>
          <OffersItem items={offers} />
        </OffersContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Offers;

const SectionTitle = styled.h1`
  font-family: "Open Sans Condensed", sans-serif;
  padding-bottom: 41px;
  font-weight: 700;
  font-size: 42px;
  color: #000000;
  line-height: 45px;
`;

const OffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  height: auto;
`;
