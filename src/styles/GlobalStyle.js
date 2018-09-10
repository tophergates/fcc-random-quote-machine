import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    min-height: 100%;
  }

  body {
    background: ${props => {
      // There is probably a better way of doing this
      // but this mutates the theme background so other
      // components can use it to adjust their color
      props.theme.colors.background = props.background || props.theme.colors.background;
      return props.theme.colors.background;
    }};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-family: ${({ theme }) => theme.fonts.primarySans};
    font-size: 160%;
    line-height: 1.8;
    min-width: 320px;
    transition: background 0.5s ease-out;
  }

  .appWrapper {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    
    @media screen and (min-width: 480px) {
      min-width: ${({ theme }) => theme.sizes.minWidth};
      max-width: ${({ theme }) => theme.sizes.maxWidth};
      padding: 0 4.5rem 0 2rem;
    }
  }
`;

export default GlobalStyle;
