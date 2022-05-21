import styled from "styled-components";
import { Link } from "react-router-dom";
import { openAuthModal } from "../../store/showAuthSlice";
import { openCartModal } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { DarkMode } from "../Darkmode";
import { mobile, small, medium } from "../../style/responsive";
import Badge from "@mui/material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import pj_logo from "../../assets/pj_logo.png";

const HeaderTop = () => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  const openModalHandler = (sign) => {
    dispatch(openAuthModal(sign));
  };

  const openCartModalHandler = () => {
    dispatch(openCartModal());
  };

  return (
    <Conainer>
      <Wrapper>
        <Logo>
          <Link to="/">
            <LogoImg src={pj_logo} />
          </Link>
        </Logo>
        <Menu>
          <LeftMenu>
            <MenuItem>Restaurants</MenuItem>
            <MenuItem>Papa Rewards</MenuItem>
            <MenuIcon>
              <AssignmentIndIcon onClick={() => openModalHandler("signin")} />
            </MenuIcon>
          </LeftMenu>
          <RightMenu>
            <MenuItem margin={"0px"} onClick={() => openModalHandler("signin")}>
              Sign in
            </MenuItem>
            <MenuItem onClick={() => openModalHandler("signup")}>
              /Sign Up
            </MenuItem>
            <ShoppingBasket>
              <Badge
                badgeContent={totalQuantity}
                color="primary"
                onClick={openCartModalHandler}
                style={{ cursor: "pointer" }}
              >
                <ShoppingBasketOutlinedIcon />
              </Badge>
              <DarkMode />
            </ShoppingBasket>
          </RightMenu>
        </Menu>
      </Wrapper>
    </Conainer>
  );
};

export default HeaderTop;

const Conainer = styled.div`
  height: 70px;
  position: relative;
  z-index: 23;
`;

const Wrapper = styled.div`
  max-width: 1390px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 210px;
`;

const Logo = styled.a`
  position: absolute;
  top: 38px;
  left: 0px;
  width: 194px;

  @media (max-width: 1350px) {
    top: 50px;
  }

  ${medium({ top: "13px", left: "15px" })}
`;

const LogoImg = styled.img`
  width: 140%;

  @media (max-width: 1350px) {
    width: 100%;
  }

  @media (min-width: 1300px) and (max-width: 1350px) {
    width: 120%;
  }
  ${medium({ width: "50%" })}
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;

  ${small({ justifyContent: "center", width: "85%", paddingTop: "6px" })};
  ${mobile({ width: "70%" })};
`;

const MenuItem = styled.a`
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 23px;
  line-height: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
  cursor: pointer;
  margin-right: ${(props) => props.margin || "25px"};

  ${small({ display: "none" })}
`;

const MenuIcon = styled.span`
  display: none;
  ${small({ display: "block", marginLeft: "auto" })};

  & svg {
    font-size: 30px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const ShoppingBasket = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1px;

  @media (max-width: 780px) {
    & svg {
      font-size: 30px;
    }
  }
  ${small({ marginLeft: "20px" })};
`;

const DropDownContainer = styled.span`
  margin-right: 25px;
  & button {
    font-family: "Open Sans Condensed", sans-serif;
    gap: 5px;
    font-size: 23px;
    line-height: 25px;
    font-weight: 700;
    transition: all, 0.3s;
    color: #000000 !important;
    text-transform: capitalize;
    cursor: pointer;
    -webkit-transition: all, 0.3s;
  }
`;

const Price = styled.span``;
