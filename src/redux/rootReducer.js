import { combineReducers } from 'redux';
import toggleReducer from './toggleSlice.js'

const rootReducer = combineReducers({
    toggle: toggleReducer,
  });
  
  export default rootReducer;