import styled from 'styled-components';

const ButtonContainer = styled.ul`
  bottom: -3.75rem;
  display: flex;
  left: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: -1;

  @media screen and (min-width: 480px) {
    bottom: 0;
    flex-direction: column;
    left: calc(100% - 3.25rem);
    top: 2rem;
  }
`;

const Button = styled.li`
  align-self: flex-end;
  backface-visibility: hidden;
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.85rem;
  margin: 0 0 0 0.5rem;
  transition: transform 0.25s ease-in-out;

  a {
    color: ${props =>
      props.twitter ? props.theme.colors.twitterBlue : props.theme.colors.primaryDark};
    display: block;
    padding: 3rem 1rem 0.5rem 1rem;

    &.disabled {
      color: #aaa;
    }

    .spin {
      transform: rotate(360deg);
      transition: transform 0.25s ease-in-out;
    }

    :active {
      color: ${props => (props.twitter ? props.theme.colors.twitterBlue : 'inherit')};
    }
  }

  :active,
  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    transform: translateY(5%);
  }

  @media screen and (min-width: 480px) {
    align-self: stretch;
    margin: 0 0 0.5rem 0;
    text-align: right;

    a {
      padding: 0.5rem 0.85rem 0.5rem 3.75rem;
    }

    :active,
    :hover,
    :focus {
      transform: translateX(5%);
    }
  }
`;

ButtonContainer.Button = Button;

export { Button };
export default ButtonContainer;
