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
              <h1 onClick={handleSetSign.bind(null, "signin")}>Sign in</h1>
              <h1 onClick={handleSetSign.bind(null, "signup")}>Sign up</h1>
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

  & > h1 {
    cursor: pointer;
    margin-right: 5px;
  }
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
