import { useEffect } from "react";
import styled from "styled-components";
import PromoCode from "../components/PromoCode";
import Container from "../components/Container";
import Items from "../components/Items";
import { pizzas } from "../sources/pizzas";
import { mobile } from "../style/responsive";
import { useParams, Link } from "react-router-dom";

const Pizzas = () => {
  const { id } = useParams();
  const existingItem = pizzas.filter((pizza) => pizza.type === id);

  return (
    <>
      <PromoCode />
      <Container>
        <ProductNav>
          <List>
            <ListItem>
              <Link to="/pizza/all">All</Link>
            </ListItem>
            <ListItem>
              <Link to="/pizza/chicken">Chicken</Link>
            </ListItem>
            <ListItem>
              <Link to="/pizza/meat">Meat</Link>
            </ListItem>
            <ListItem>
              <Link to="/pizza/vegetarian">Vegetarian</Link>
            </ListItem>
            <ListItem>
              <Link to="/pizza/hot">Hot</Link>
            </ListItem>
          </List>
        </ProductNav>

        <OffersContainer>
          {id === "all" ? (
            <Items items={pizzas} />
          ) : (
            <Items items={existingItem} />
          )}
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
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
  cursor: pointer;
  & a {
    color: ${({ theme }) => theme.textBanner};
  }

  ${mobile({ marginRight: "12px", fontSize: "21px" })}
`;
// ${mobile({ marginRight: "14px" })}
