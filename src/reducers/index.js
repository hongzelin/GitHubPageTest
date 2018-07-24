import { combineReducers } from 'redux';

import counter from './counter';

import user from './user';

import reminder from './reminder';

const rootReducer = combineReducers({
  counter,
  user,
  reminder
});

export default rootReducer;