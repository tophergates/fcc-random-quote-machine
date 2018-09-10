import styled from 'styled-components';

const Quote = styled.blockquote`
  height: 100%;
  margin: 0;
  padding: 1.6rem;
  text-align: center;
`;

const Text = styled.p``;

const Author = styled.p`
  font-weight: bold;

  ::after,
  ::before {
    padding: 0 0.5rem;
  }

  ::after {
    content: '-';
  }

  ::before {
    content: '-';
  }
`;

Quote.Author = Author;
Quote.Text = Text;

export { Author, Text };
export default Quote;
