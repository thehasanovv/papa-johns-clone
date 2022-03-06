import styled from "styled-components";
import { mobile } from "../../style/responsive";

const PromoCode = () => {
  return (
    <Container>
      <Wrapper>
        <InWrapper>
          <p>
            Got a Promo code? <span>Enter here</span>
          </p>
          <InputContainer>
            <Input placeholder="Enter a promo code" />
            <Button>OK</Button>
          </InputContainer>
        </InWrapper>
      </Wrapper>
    </Container>
  );
};

export default PromoCode;

const Container = styled.div`
  max-width: 1390px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  padding: 18px 0 18px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgBanner};
  ${mobile({ padding: "10px 0 10px" })}
`;

const InWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ flexDirection: "column" })}

  & p {
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 34px;
    color: ${({ theme }) => theme.textBanner};

    ${mobile({ fontSize: "22px", paddingBottom: "3px" })};

    & span {
      color: ${({ theme }) => theme.green};
    }
  }
`;
const InputContainer = styled.div`
  margin-left: 39px;
  display: flex;
  align-items: center;
  ${mobile({ marginLeft: "0px" })}
`;

const Input = styled.input`
  font-family: "Open Sans Condensed", sans-serif;
  width: 200px;
  height: 39px;
  background: #ffffff;
  color: #000000;
  outline: none;
  border: 1px solid #0f9675;
  border-radius: 8px;
  line-height: 39px;
  font-size: 18px;
  padding: 0 10px;
  font-weight: 700;
  -webkit-appearance: none;

  &::placeholder {
    color: #666;
    opacity: 0.4;
    ${mobile({ fontSize: "16px" })}
  }

  &:-ms-input-placeholder {
    color: #666;
    opacity: 0.4;
  }

  &::-ms-input-placeholder {
    color: #666;
    opacity: 0.4;
  }
  ${mobile({ height: "27px", width: "170px" })}
`;
const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-family: "Open Sans Condensed", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  padding: 0 21px;
  background: #0f9675;
  height: 39px;
  border-radius: 8px;
  margin-left: 13px;
  transition: all, 0.3s;

  ${mobile({ height: "27px" })}
`;
