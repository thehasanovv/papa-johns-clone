import styled from "styled-components";
import PromoCode from "../components/PromoCode";
import Container from "../components/Container";
import Items from "../components/Items";
import { pizzas } from "../sources/pizzas";
// import { mobile } from "../responsive/index";

const Pizzas = () => {
  return (
    <>
      <PromoCode />
      <Container>
        <ProductNav>
          <List>
            <ListItem>All</ListItem>
            <ListItem>Chicken</ListItem>
            <ListItem>Meat</ListItem>
            <ListItem>Vegetarian</ListItem>
            <ListItem>Hot</ListItem>
          </List>
        </ProductNav>

        <OffersContainer>
          <Items items={pizzas} />
        </OffersContainer>
      </Container>
    </>
  );
};

export default Pizzas;

const OffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -13px;
  font-size: 0;
  line-height: 0;
  margin-bottom: 40px;
`;

const ProductNav = styled.div`
  background: ${({ theme }) => theme.bgBanner};
  padding: 11px 23px 14px;
  margin-bottom: 19px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 19px;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 23px;
  line-height: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.textBanner};
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    margin-right: 14px;
  }
`;
// ${mobile({ marginRight: "14px" })}
