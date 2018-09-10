import randomColor from 'randomcolor';
import { QUOTE__FETCHING, QUOTE__FETCH_SUCCESS, QUOTE__FETCH_ERROR } from './actionTypes';

const fetchingQuote = () => ({
  type: QUOTE__FETCHING
});

const fetchSuccess = ({ quote: text, author, cat: category }) => ({
  type: QUOTE__FETCH_SUCCESS,
  payload: {
    background: randomColor(),
    quote: { text, author, category }
  }
});

const fetchError = ({ message }) => ({
  type: QUOTE__FETCH_ERROR,
  payload: {
    background: 'red',
    error: `Oh no! Somethings gone horribly wrong: ${message}`
  }
});

const getQuote = () => async dispatch => {
  const API_URL = 'https://talaikis.com/api/quotes/random/';

  try {
    dispatch(fetchingQuote());

    const quote = await (await fetch(API_URL)).json();
    dispatch(fetchSuccess(quote));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export default getQuote;
