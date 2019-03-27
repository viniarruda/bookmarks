import { combineReducers } from "redux";
import bookmarks from './bookmarks/reducers'
import {reducer as formReducer} from 'redux-form';

const appReducer = combineReducers({
  bookmarks,
  form: formReducer
});

export default (state, action) => appReducer(state, action);
