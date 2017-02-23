import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBook from './active-book';

// all reducers are combined in this function
// each property in this function will have it's own reducers
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
