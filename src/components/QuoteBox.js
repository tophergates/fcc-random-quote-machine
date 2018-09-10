import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import ButtonContainer from './styled/ButtonContainer';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './styled/Header';
import Footer from './styled/Footer';
import Quote from './styled/Quote';
import QuoteContainer from './styled/QuoteContainer';
import getQuote from '../redux/actions';

class QuoteBox extends PureComponent {
  static propTypes = {
    error: PropTypes.string,
    getQuote: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    quote: PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string
    }).isRequired
  };

  componentDidMount() {
    this.props.getQuote();
  }

  refreshQuote = event => {
    event.preventDefault();
    this.props.getQuote();
  };

  renderQuote() {
    const { error, loading, quote } = this.props;
    let jsx = null;

    if (loading) {
      jsx = (
        <Quote.Text id="text" loading>
          Loading...
        </Quote.Text>
      );
    } else if (error) {
      jsx = (
        <Quote.Text id="text" error>
          {error}
        </Quote.Text>
      );
    } else {
      jsx = (
        <Fragment>
          <Quote.Text id="text">{quote.text}</Quote.Text>
          <Quote.Author id="author">{quote.author}</Quote.Author>
        </Fragment>
      );
    }

    return jsx;
  }

  render() {
    const { background, error, loading, quote } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle background={background} />
        <Header>
          <Header.Logo />
          <Header.Text>QuoteMe Machine</Header.Text>
        </Header>
        <QuoteContainer loading={loading}>
          <Quote>{this.renderQuote()}</Quote>
          <ButtonContainer>
            <ButtonContainer.Button>
              <a id="new-quote" title="Retrieve a new quote" onClick={this.refreshQuote}>
                <FontAwesomeIcon
                  icon={faRedoAlt}
                  aria-label="New Quote"
                  className={loading ? 'spin' : ''}
                />
              </a>
            </ButtonContainer.Button>
            <ButtonContainer.Button twitter>
              {!loading && error === '' ? (
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURI(
                    `${quote.author} once said: ${quote.text}`
                  )}&hashtags=${encodeURI(quote.category)}&via=quotememachine`}
                  id="tweet-quote"
                  title={`Tweet this ${quote.author} quote`}
                  target="_blank"
                  rel="noopener"
                >
                  <FontAwesomeIcon icon={faTwitter} aria-label="Tweet Quote" />
                </a>
              ) : (
                <a id="tweet-quote" className="disabled">
                  <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                </a>
              )}
            </ButtonContainer.Button>
          </ButtonContainer>
        </QuoteContainer>
        <Footer>
          <p>
            <a href="https://github.com/tophergates">
              Made with <span>♥</span> by tophergates
            </a>
          </p>
        </Footer>
      </React.Fragment>
    );
  }
}

export default connect(
  state => state,
  { getQuote }
)(QuoteBox);
