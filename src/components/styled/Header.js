import styled from 'styled-components';
import { darken, lighten, readableColor, rgba, setSaturation } from 'polished';

import logo from '../../images/open-quotations.svg';

const Header = styled.header`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primarySerif};
  margin: 0 2rem;
  min-width: 28rem;
  position: relative;
  z-index: 1;
`;

const Logo = styled.span`
  background-image: url(${logo});
  background-size: cover;
  border: 0;
  border-radius: 0.85rem;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 75% 80%, 80% 100%, 50% 80%, 0% 80%);
  height: 2.5rem;
  position: absolute;
  top: 0;
  width: 2.5rem;
  transition: all 0.25s ease-out;

  @media screen and (min-width: 650px) {
    height: 5rem;
    top: -1rem;
    width: 5rem;
  }
`;

const Text = styled.h1`
  backface-visibility: hidden;
  color: ${({ theme }) => {
    return readableColor(theme.colors.background) === '#fff'
      ? rgba(lighten(0.75, theme.colors.background), 0.75)
      : rgba(darken(0.5, setSaturation(0.5, theme.colors.background)), 0.75);
  }};
  margin: 0 0 -1.55rem 0.85rem;
  margin-bottom: -1.55rem;
  padding: 0 1.25rem;
  font-size: 3rem;
  text-align: center;
  text-shadow: 0 0 0.25rem
    ${({ theme }) => {
      return readableColor(theme.colors.background) === '#fff'
        ? rgba(darken(0.5, theme.colors.background), 0.85)
        : rgba(lighten(0.5, theme.colors.background), 0.85);
    }};
  transform: translateZ(0);
  transition: color 0.75s ease-in, font-size 0.2s ease-in;

  @media screen and (min-width: 375px) {
    font-size: 3.5rem;
    margin-bottom: -1.85rem;
  }

  @media screen and (min-width: 480px) {
    text-align: left;
    font-size: 3.8rem;
    margin-bottom: -1.9rem;
  }

  @media screen and (min-width: 650px) {
    font-size: 4.2rem;
    margin-left: 4.25rem;
    margin-bottom: -2.05rem;
  }
`;

Header.Logo = Logo;
Header.Text = Text;

export { Logo, Text };
export default Header;
