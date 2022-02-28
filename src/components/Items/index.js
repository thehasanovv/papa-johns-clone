import styled from "styled-components";
import { mobile, small, medium } from "../../Responsive";

const Items = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Cart key={item.id}>
          <ImageContainer>
            <Image src={item.image} />
          </ImageContainer>
          <Title>
            <span>{item.name}</span>
            <Button>SELECT</Button>
          </Title>
          <Ingredients>{item.ingredients}</Ingredients>
        </Cart>
      ))}
    </>
  );
};

export default Items;

const Cart = styled.div`
  width: 25%;
  padding: 0 13px 37px;
  ${medium({ width: "33.3333333%" })}
  ${small({ width: "50%" })}
  ${mobile({ width: "100%" })}
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
  min-width: 100%;
  min-height: 220px;
  ${mobile({ height: "220px", objectFit: "cover" })}
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: #171717;
    line-height: 25px;
  }
`;
const Button = styled.button`
  padding: 0 21px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #0f9675;
  text-transform: uppercase;
  color: #fff;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  font-size: 18px;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
  height: 39px;
  line-height: 39px;
  border-radius: 4px;
`;
const Ingredients = styled.p`
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #282828;
  letter-spacing: 0px;
  line-height: 20px;
`;
