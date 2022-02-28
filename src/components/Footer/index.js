import styled from "styled-components";
import BgImg from "../../assets/footer-images-en-EN.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { mobile, medium } from "../../Responsive";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InWrapper>
          <Left>
            <Copy> &copy; PJA {new Date().getFullYear()}</Copy>
            <List>
              <ListItem>About Us</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Career</ListItem>
              <ListItem>Dough</ListItem>
              <ListItem>Papa Talk - Terms and Conditions</ListItem>
            </List>
          </Left>
          <Right>
            <BgLink>
              <BgImage src={BgImg} />
            </BgLink>
            <Icons>
              <Icon>
                <FacebookIcon />
              </Icon>
              <Icon>
                <TwitterIcon />
              </Icon>
              <Icon>
                <InstagramIcon />
              </Icon>
            </Icons>
          </Right>
        </InWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: #ad0f14;
  padding: 20px 0;
  color: #fff;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  ${mobile({ fontSize: "14px", paddingBottom: "25px" })}
`;
const Wrapper = styled.div`
  max-width: 1390px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

const InWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${medium({ flexDirection: "column" })}
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${medium({ marginBottom: "20px" })}
`;

const Copy = styled.p`
  ${mobile({
    position: "absolute",
    top: "90%",
    left: "40%",
    right: "35%",
  })}
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-left: 11px;

  ${medium({ marginLeft: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${medium({ marginBottom: "20px" })}
`;

const BgLink = styled.a``;

const BgImage = styled.img`
  height: 60px;
  width: 310px;
  background-repeat: no-repeat;
  cursor: pointer;
  border-right: 2px solid #eee;
  padding-right: 19px;
  ${mobile({ width: "160px", height: "30px" })};
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-left: 28px;
  text-rendering: auto;
  -webkit-font-smoothing: antialiase;

  ${mobile({ marginLeft: "20px", svg: { fontSize: "16px" } })}
`;
