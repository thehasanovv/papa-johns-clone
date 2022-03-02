import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PromoCode from "../components/PromoCode";
import Container from "../components/Container";
import Items from "../components/Items";

import { salads } from "../sources/salads";

const Offers = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <PromoCode />
        <Container>
          <OffersContainer>
            <Items items={salads} />
          </OffersContainer>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Offers;

const OffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -11px;
  font-size: 0;
  line-height: 0;
  margin-bottom: 40px;
`;

const MainContainer = styled.div``;
