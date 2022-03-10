import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { mobile } from "../../../style/responsive";
import { useSelector, useDispatch } from "react-redux";
import {
  closeCartModal,
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from "../../../store/cartSlice";

const AuthModal = () => {
  const { isShowCartModal, cartTotalQuantity, cartTotalPrice, items } =
    useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeCartModal());
  };

  const onAddItem = (item) => {
    const { price, id } = item;
    const totalPrice = price;
    dispatch(addItemToCart({ id, price, totalPrice, quantity: 1 }));
  };

  const onRemoveItem = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  const onDeleteItem = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div>
      <Modal
        open={isShowCartModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Wrapper>
            <span
              onClick={handleClose}
              style={{ position: "absolute", cursor: "pointer" }}
            >
              <CancelIcon />
            </span>
            <Title>Cart Modal</Title>
            <TotalCount>
              "Item in your basket: <span>{cartTotalQuantity}</span> "
            </TotalCount>
            {/* Cart Items */}
            {items.map((item) => (
              <ItemContainer key={item.id}>
                <ItemContainerFlex>
                  <Image>
                    <img src={item.image} />
                  </Image>
                  <Text>
                    <span>{item.name}</span>
                  </Text>
                </ItemContainerFlex>

                <ItemContainerFlex>
                  <Count>
                    <CountItem
                      bgColor={"grey"}
                      onClick={() => {
                        onRemoveItem(item.id);
                      }}
                    >
                      -
                    </CountItem>
                    <CountItem bgColor={"#f1f1f1"} color={"#000"}>
                      {item.quantity}
                    </CountItem>
                    <CountItem
                      bgColor={"#0f9675"}
                      onClick={() => {
                        onAddItem(item);
                      }}
                    >
                      +
                    </CountItem>
                  </Count>
                  <Sum>
                    <span>{item.totalPrice}</span>
                    <span>
                      <AttachMoneyIcon />
                    </span>
                    <span
                      style={{ color: "#ad0f14", cursor: "pointer" }}
                      onClick={() => {
                        onDeleteItem(item.id);
                      }}
                    >
                      <DeleteForeverIcon />
                    </span>
                  </Sum>
                </ItemContainerFlex>
              </ItemContainer>
            ))}
            <Checkout>
              <CheckoutBtn>Checkout</CheckoutBtn>
              <Amount>
                <span>Total Amount: {cartTotalPrice}</span>
                <span>
                  <AttachMoneyIcon />
                </span>
              </Amount>
            </Checkout>
          </Wrapper>
        </Container>
      </Modal>
    </div>
  );
};

export default AuthModal;

const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 650px;
  width: 100%;
  padding: 25px 22px 22px 35px;
  outline: none;
  max-height: 400px;
  overflow: auto;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.textBanner};
  ${mobile({ maxWidth: "340px" })};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  & span {
    right: 3%;
    top: 5%;
  }
`;

const Title = styled.h2`
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: ${({ theme }) => theme.text};
  line-height: 44px;
  padding-bottom: 15px;
  ${mobile({ fontSize: "32px", lineHeight: "22px" })};
`;

const TotalCount = styled.div`
  margin-bottom: 35px;

  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 700;
  }
`;

const ItemContainer = styled.div`
  padding: 5px 0 15px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", marginBottom: "30px" })}
`;
const ItemContainerFlex = styled.div`
  display: flex;

  ${mobile({ justifyContent: "space-between" })}
`;
const Image = styled.div`
  width: 76px;
  height: 76px;
  margin-right: 15px;

  & img {
    display: block;
    width: 100%;
    min-width: 100%;
  }
`;

const Text = styled.div`
  width: 200px;
  top: -4px;
  padding-top: 0px;

  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: ${({ theme }) => theme.text};

    line-height: 25px;
    display: block;
    padding-bottom: 7px;
  }
`;

const Count = styled.div`
  display: flex;
`;

const CountItem = styled.div`
  height: 29px;
  width: 29px;
  line-height: 29px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color || "#fff"};
`;

const Sum = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 12px;
  display: flex;
  width: 80px;

  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: ${({ theme }) => theme.text};
  }
`;

const Checkout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column-reverse" })}
`;

const CheckoutBtn = styled.button`
  font-family: "Open Sans Condensed", sans-serif;
  width: 268px;
  height: 39px;
  line-height: 39px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #ad0f14;
  text-align: center;
  text-transform: uppercase;
  transition: all, 0.3s;
  cursor: pointer;
  margin: 7px 0;
  -webkit-transition: all, 0.3s;
  ${mobile({ width: "100%" })}
`;

const Amount = styled.div`
  display: flex;
  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    color: ${({ theme }) => theme.text};
  }
`;
