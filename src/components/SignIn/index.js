import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignIn = () => {
  return (
    <Container>
      <div>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          type="text"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
          fullWidth
        />
      </div>

      <Button variant="contained">Sign In</Button>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;

  & div {
    margin-bottom: 5px;
    width: 100%;
  }
`;
