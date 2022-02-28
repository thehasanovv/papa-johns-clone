import { css } from "styled-components";

export const medium = (props) => {
  return css`
    @media only screen and (max-width: 1300px) {
      ${props}
    }
  `;
};

export const small = (props) => {
  return css`
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `;
};

// ${mobile({ flexDirection: "column" })}
