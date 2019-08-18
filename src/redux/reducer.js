import {
  QUOTE__FETCHING,
  QUOTE__FETCH_SUCCESS,
  QUOTE__FETCH_ERROR
} from './actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case QUOTE__FETCHING:
      return {
        ...state,
        ...{ loading: true, error: '' }
      };
    case QUOTE__FETCH_SUCCESS:
      return {
        background: payload.background,
        loading: false,
        error: '',
        quote: payload.quote
      };
    case QUOTE__FETCH_ERROR:
      return {
        ...state,
        ...{
          background: payload.background,
          loading: false,
          error: payload.error
        }
      };
    default:
      return state;
  }
};
