import styled from 'styled-components';
import { darken, lighten, readableColor } from 'polished';

const QuoteContainer = styled.main`
  background: ${({ theme }) => {
    return readableColor(theme.colors.background) === '#fff'
      ? darken(0.25, theme.colors.background)
      : lighten(0.35, theme.colors.background);
  }};
  border-radius: 0.85rem;
  box-shadow: 0 3px 1rem 0.25rem rgba(0, 0, 0, 0.5);
  color: ${({ theme }) =>
    readableColor(theme.colors.background) === '#fff'
      ? theme.colors.primaryLight
      : theme.colors.primaryDark};
  margin: 0 2rem;
  min-height: 15rem;
  min-width: 28rem;
  position: relative;
  transition: background 0.5s ease-in, opacity 0.25s ease-out;
`;

export default QuoteContainer;
