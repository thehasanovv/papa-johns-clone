import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import SignIn from "../../SignIn";
import SignUp from "../../SignUp";

import { useSelector, useDispatch } from "react-redux";
import { closeAuthModal, setSign } from "../../../store/showAuthSlice";

const AuthModal = () => {
  const isShow = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  const handleSetSign = (sign) => {
    dispatch(setSign(sign));
  };

  return (
    <div>
      <Modal
        open={isShow.isShowAuthModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Wrapper>
            <span onClick={handleClose}>
              <CancelIcon />
            </span>
            <Buttons>
              <SignInBtn
                onClick={handleSetSign.bind(null, "signin")}
                color={isShow.sign}
              >
                Sign in
              </SignInBtn>
              <SignUpBtn
                onClick={handleSetSign.bind(null, "signup")}
                color={isShow.sign}
              >
                Sign up
              </SignUpBtn>
            </Buttons>
            {isShow.sign === "signin" && <SignIn />}
            {isShow.sign === "signup" && <SignUp />}
          </Wrapper>
        </Container>
      </Modal>
    </div>
  );
};

export default AuthModal;

const Buttons = styled.div`
  display: flex;
`;

const SignInBtn = styled.h1`
  cursor: pointer;
  margin-right: 15px;
  color: ${(props) => (props.color === "signin" ? "#000" : "#adaaaa")};
  font-weight: 500;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 2px;
    width: 100%;
    background-color: ${(props) =>
      props.color === "signin" ? "#000" : "gray"};
  }
`;
const SignUpBtn = styled(SignInBtn)`
  color: ${(props) => (props.color === "signup" ? "#000" : "gray")};
`;

const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f2f2f2;
  width: 400px;
  height: 400px;
  outline: none;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;

  & span {
    position: absolute;
    right: 3%;
    top: 2%;
    cursor: pointer;
  }
`;
