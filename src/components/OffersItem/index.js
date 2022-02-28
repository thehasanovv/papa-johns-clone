import styled from "styled-components";
import { mobile, medium } from "../../Responsive";

const OffersItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Cart key={item.id}>
          <Image src={item.image} />
          <Button>See More</Button>
        </Cart>
      ))}
    </>
  );
};
export default OffersItem;

const Cart = styled.div`
  width: 25%;
  padding: 20px 20px 67px 20px;

  &:hover {
    transform: scale(1.01);
    background: whitesmoke;
  }

  ${medium({ width: "50%" })}
  ${mobile({ width: "100%" })}
`;

const Image = styled.img`
  display: block;
  width: 100%;
  min-height: 220px;
  margin-bottom: 50px;
`;
const Button = styled.button`
  padding: 0 21px;
  background: #0f9675;
  border: none;
  outline: none;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  -webkit-transition: all, 0.3s;
  transition: all, 0.3s;
  height: 39px;
  line-height: 39px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
