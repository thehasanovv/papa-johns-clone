import React from "react";
import styled from "styled-components";

const Container = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  max-width: 1390px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  min-height: 80vh;
`;
