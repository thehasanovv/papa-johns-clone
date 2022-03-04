import styled from "styled-components";
import PromoCode from "../components/PromoCode";
import Container from "../components/Container";
import Items from "../components/Items";

import { sauces } from "../sources/sauces";

const Sauces = () => {
  return (
    <>
      <PromoCode />
      <Container>
        <OffersContainer>
          <Items items={sauces} />
        </OffersContainer>
      </Container>
    </>
  );
};

export default Sauces;

const OffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -11px;
  font-size: 0;
  line-height: 0;
  margin-bottom: 40px;
`;
