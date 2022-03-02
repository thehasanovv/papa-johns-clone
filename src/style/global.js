import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  *::-webkit-scrollbar-thumb {
    background: #8a191d;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.hoverScroll};
  }

  `;
