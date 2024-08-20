import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

// import {configureStore} from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
