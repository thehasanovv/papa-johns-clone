import styled from "styled-components";

import PromoCode from "../components/PromoCode";
import Container from "../components/Container";
import Items from "../components/Items";

import { desserts } from "../sources/desserts";

const Offers = () => {
  return (
    <>
      <PromoCode />
      <Container>
        <OffersContainer>
          <Items items={desserts} />
        </OffersContainer>
      </Container>
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
