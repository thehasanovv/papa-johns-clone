import styled from "styled-components";

import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Navbar = () => {
  return (
    <Header>
      <HeaderTop />
      <HeaderBottom />
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  margin-bottom: 30px;
`;
