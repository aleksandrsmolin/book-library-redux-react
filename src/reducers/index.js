import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  books: BoocksReducer,
});

export default rootReducer;
