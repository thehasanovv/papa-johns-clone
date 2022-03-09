import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile, medium } from "../../style/responsive";

const HeaderBottom = () => {
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <List>
            <ListItem>
              <NavLink
                to="/offers"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Offers
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/papadias"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Papadias
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/pizza/all"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Pizza
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/snackes"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Snackes
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/salads"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Salads
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/pasta"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Pasta
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/drinks"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Drinks
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/desserts"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Desserts
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/sauces"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Sauces
              </NavLink>
            </ListItem>
          </List>
          {/* <Points>
            <Point>0 pts</Point>
            <PointIcon>?</PointIcon>
          </Points> */}
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default HeaderBottom;

const Container = styled.div`
  background: #ad0f14;
  padding: 32px 0 32px;
  position: relative;

  ${mobile({ paddingTop: "16px", paddingBottom: "16px" })}

  @media (max-width: 1300px) {
    &:before {
      content: "";
      position: absolute;
      width: 60px;
      height: 100%;
      top: 0;
      z-index: 22;
      left: 0;
      background: -webkit-linear-gradient(
        right,
        rgba(173, 15, 20, 0) 0%,
        #ad0f14 100%
      );
      background: linear-gradient(
        to left,
        rgba(173, 15, 20, 0) 0%,
        #ad0f14 100%
      );
    }

    &:after {
      content: "";
      position: absolute;
      width: 60px;
      height: 100%;
      top: 0;
      z-index: 22;
      right: 0;
      background: -webkit-linear-gradient(
        left,
        rgba(173, 15, 20, 0) 0%,
        #ad0f14 100%
      );
      background: linear-gradient(
        to right,
        rgba(173, 15, 20, 0) 0%,
        #ad0f14 100%
      );
    }
  }
`;
const Wrapper = styled.div`
  max-width: 1390px;
  max-width: 95%;
  padding: 0 10px;
  margin: 0 auto;
  position: relative;
  padding-left: 220px;

  @media (min-width: 1350px) {
    padding-left: 290px;
  }

  ${medium({ paddingLeft: "0px" })}
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::-webkit-scrollbar {
    height: 0px;
  }
  ${medium({
    overflowY: "hidden",
    overflowX: "auto",
    overflowScrolling: "touch",
    webkitOverflowScrolling: "touch",
  })}
`;
const List = styled.ul`
  display: flex;
  align-items: center;
`;
const ListItem = styled.li`
  font-family: "Open Sans Condensed", Arial, sans-serif;
  font-size: 26px;
  line-height: 26px;
  font-weight: 700;
  padding-left: 25px;
  text-transform: uppercase;
  position: relative;

  &:last-child {
    padding-right: 25px;
  }

  & a {
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  }
  ${mobile({ fontSize: "18px", paddingLeft: "10px" })}
`;

const Points = styled.div``;
const Point = styled.span``;
const PointIcon = styled.span``;
