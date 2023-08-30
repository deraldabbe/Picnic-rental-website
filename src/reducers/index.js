
// reducers/index.js

import { combineReducers } from 'redux';
import picnicReducer from './picnicReducer';

const rootReducer = combineReducers({
  picnic: picnicReducer,
});

export default rootReducer;
