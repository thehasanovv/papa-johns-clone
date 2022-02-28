import styled from "styled-components";
import BgImg from "../../assets/footer-images-en-EN.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { medium } from "../../Responsive";

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
`;
const Wrapper = styled.div`
  max-width: 1390px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
`;

const InWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${medium({ flexDirection: "column" })}
`;

const Copy = styled.p``;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${medium({ flexDirection: "column" })}
`;
const ListItem = styled.li`
  margin-left: 11px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${medium({ flexDirection: "column" })}
`;

const BgLink = styled.a``;

const BgImage = styled.img`
  height: 60px;
  width: 310px;
  background-repeat: no-repeat;
  border-right: 2px solid #eee;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-left: 28px;
  text-rendering: auto;
  -webkit-font-smoothing: antialiase;
`;
