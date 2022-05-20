import styled from "styled-components";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/cartSlice";
import {
  closeProductModal,
  addQuantity,
  removeQuantity,
} from "../../../store/showProductSlice";
import { Toast } from "../Toast";

const AuthModal = () => {
  const { isShowProductModal, item } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeProductModal());
  };
  // Inc product count
  const onAddHandler = () => {
    dispatch(addQuantity());
  };
  // Dec product count
  const onRemoveHandler = () => {
    dispatch(removeQuantity());
  };
  // Add Item to basket
  const addItemToCartHandler = (product) => {
    Toast.fire({
      icon: "success",
      title: "Product added to basket",
    });

    dispatch(closeProductModal());

    dispatch(
      addItemToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        quantity: product.quantity,
        price: product.price,
        totalPrice: product.totalPrice,
      })
    );
  };

  return (
    <div>
      <Modal
        open={isShowProductModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          {item[0] && (
            <Wrapper>
              <span onClick={handleClose}>
                <CancelIcon />
              </span>
              <Image>
                <img src={item[0].image} />
              </Image>
              <ProductName>{item[0].name}</ProductName>
              <PriceContainer>
                <Count>
                  <CountItem bgColor={"grey"} onClick={onRemoveHandler}>
                    -
                  </CountItem>
                  <CountItem bgColor={"#f1f1f1"} color={"#000"}>
                    {item[0].quantity}
                  </CountItem>
                  <CountItem bgColor={"#0f9675"} onClick={onAddHandler}>
                    +
                  </CountItem>
                </Count>
                <Price>
                  {item[0].totalPrice}
                  <AttachMoneyIcon />
                </Price>
              </PriceContainer>
              <OrderContainer>
                <Button onClick={() => addItemToCartHandler(item[0])}>
                  ADD
                </Button>
              </OrderContainer>
            </Wrapper>
          )}
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
  background: ${({ theme }) => theme.body};

  max-width: 400px;
  outline: none;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & span {
    position: absolute;
    right: 3%;
    top: 2%;
    cursor: pointer;
  }
`;

const Image = styled.div`
  margin: 0 auto;
  width: 320px;
  max-width: 100%;
  margin-top: 20px;

  & img {
    width: 100%;
    min-width: 100%;
  }
`;

const ProductName = styled.h2`
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  line-height: 44px;
  font-size: 30px;
  color: ${({ theme }) => theme.text};

  margin-bottom: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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

const Price = styled.div`
  font-weight: 700;
  line-height: 1;
  font-size: 32px;
  color: ${({ theme }) => theme.text};

  font-style: normal !important;
  display: flex;
  align-items: center;
  & svg {
    font-size: 32px;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  padding: 0 21px;
  background: #0f9675;
  color: #fff;

  font-weight: 700;
  font-size: 18px;
  text-align: center;
  transition: all, 0.3s;
  height: 39px;
  line-height: 39px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-transition: all, 0.3s;
`;
