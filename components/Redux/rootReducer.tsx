import {combineReducers} from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  data: reducer,
});

export default rootReducer;

// import {combineReducers} from 'redux';
// import {reducer} from './reducer';

// export default combineReducers({
//   reducer,
// });
