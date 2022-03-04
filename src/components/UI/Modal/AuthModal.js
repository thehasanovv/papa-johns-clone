import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";

import { useSelector, useDispatch } from "react-redux";
import { closeAuthModal } from "../../../store/showAuthSlice";

const AuthModal = () => {
  const isShow = useSelector((state) => state.auth.isShowAuthModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAuthModal());
  };
  return (
    <div>
      <Modal
        open={isShow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Wrapper>
            <span onClick={handleClose}>
              <CancelIcon />
            </span>
            <div style={{ display: "flex" }}>
              <h1>Sign in</h1>
              <h1>Sign out</h1>
            </div>
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
