import { combineReducers } from 'redux';
import booksReducer from 'src/redux/reducers/booksReducer';

// https://github.com/reduxjs/redux/issues/738
// combine reducer
const reducer = combineReducers({
  books: booksReducer,
});

export default reducer;
