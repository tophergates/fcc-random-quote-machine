import styled from 'styled-components';
import { darken, lighten, readableColor } from 'polished';

const Footer = styled.footer`
  float: right;
  margin: 0 2rem;
  padding: 0.85rem 1rem 0 1rem;
  position: relative;
  width: 20rem;

  @media screen and (min-width: 480px) {
    float: none;
    min-width: 28rem;
    width: auto;
  }

  p {
    backface-visibility: hidden;
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    text-align: right;
    text-shadow: 0 0 0.25rem
      ${({ theme }) =>
        readableColor(theme.colors.background) === '#fff'
          ? theme.colors.primaryDark
          : theme.colors.primaryLight};
    transform: translateZ(0);

    @media screen and (min-width: 480px) {
      font-size: 1.6rem;
      text-align: center;
    }

    a {
      color: ${({ theme }) =>
        readableColor(theme.colors.background) === '#fff'
          ? theme.colors.primaryLight
          : theme.colors.primaryDark};
      text-decoration: none;

        span {
          color: ${({ theme }) => {
            return readableColor(theme.colors.background) === '#fff'
              ? darken(0.25, theme.colors.background)
              : lighten(0.35, theme.colors.background);
          }};
          text-shadow: 0 0 0.25rem
          ${({ theme }) =>
            readableColor(theme.colors.background) === '#fff'
              ? theme.colors.primaryLight
              : theme.colors.primaryDark};
          transition: color 0.25s ease-in-out;
        }
    }
`;

export default Footer;
