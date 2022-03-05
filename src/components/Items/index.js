import styled from "styled-components";
import { useDispatch } from "react-redux";
import { mobile, small, medium } from "../../style/responsive";
import { openProductModal } from "../../store/showProductSlice";

const Items = ({ items }) => {
  const dispatch = useDispatch();

  const showInfoHandler = (item) => {
    dispatch(openProductModal(item));
  };
  return (
    <>
      {items.map((item) => (
        <Cart key={item.id}>
          <Cartcontainer>
            <ImageContainer>
              <Image src={item.image} />
            </ImageContainer>
            <Title>
              <span>{item.name}</span>
              <Button onClick={() => showInfoHandler(item)}>SELECT</Button>
            </Title>
            <Ingredients>{item.ingredients}</Ingredients>
          </Cartcontainer>
        </Cart>
      ))}
    </>
  );
};

export default Items;

const Cart = styled.div`
  width: 25%;
  padding: 0 8px 32px;
  ${medium({ width: "33.3333333%" })};
  ${small({ width: "50%" })};
  ${mobile({ width: "100%" })};
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`;

const Cartcontainer = styled.div`
  padding: 0 5px 32px;
  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.hoverCart};
  }
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
  gap: 2px;

  & span {
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: ${({ theme }) => theme.text};
    line-height: 25px;
  }
`;
const Button = styled.button`
  padding: 0 16px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #0f9675;
  text-transform: uppercase;
  color: #fff;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  font-size: 18px;
  transition: all, 0.3s;
  height: 39px;
  line-height: 39px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-transition: all, 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
const Ingredients = styled.p`
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #282828;
  letter-spacing: 0px;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
`;
