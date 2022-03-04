import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import { closeCartModal } from "../../../store/cartSlice";
import img from "../../../assets/Pizza/greek.jpg";
const AuthModal = () => {
  const isShowCartModal = useSelector((state) => state.cart.isShowCartModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeCartModal());
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
            <span onClick={handleClose} style={{ position: "absolute" }}>
              <CancelIcon />
            </span>
            <Title>Cart Modal</Title>
            <TotalCount>
              "Item in your basket:<span>0</span> "
            </TotalCount>
            {/* Demo Item 1 */}
            <ItemContainer>
              <Image>
                <img src={img} />
              </Image>
              <Text>
                <span>Spicy Garden Special</span>
              </Text>
              <Count>
                <CountItem bgColor={"grey"}>-</CountItem>
                <CountItem bgColor={"#f1f1f1"} color={"#000"}>
                  0
                </CountItem>
                <CountItem bgColor={"#0f9675"}>+</CountItem>
              </Count>
              <Sum>
                <span>15</span>
              </Sum>
            </ItemContainer>
            {/* Demo Item 2 */}
            <ItemContainer>
              <Image>
                <img src={img} />
              </Image>
              <Text>
                <span>Spicy Garden Special</span>
              </Text>
              <Count>
                <CountItem bgColor={"grey"}>-</CountItem>
                <CountItem bgColor={"#f1f1f1"} color={"#000"}>
                  0
                </CountItem>
                <CountItem bgColor={"#0f9675"}>+</CountItem>
              </Count>
              <Sum>
                <span>15</span>
              </Sum>
            </ItemContainer>
            <Checkout>
              <CheckoutBtn>Checkout</CheckoutBtn>
              <Amount>
                <span>Total Amount: 0</span>
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
  background-color: #f2f2f2;
  width: 650px;
  padding: 25px 22px 22px 35px;
  outline: none;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  & span {
    right: 3%;
    top: 2%;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #000000;
  line-height: 44px;
  padding-bottom: 15px;
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
  display: inline-block;
  top: -4px;
  padding-top: 0px;

  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #171717;
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
  width: 160px;
  text-align: right;
  padding-right: 20px;

  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #171717;
    line-height: 24px;
  }
`;

const Checkout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  -webkit-transition: all, 0.3s;
`;

const Amount = styled.div`
  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #171717;
    line-height: 25px;
  }
`;
