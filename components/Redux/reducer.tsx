import {FETCH_DATA_SUCCESS, TOGGLE_LIST} from './constents';

const initialState = {
  items: [],
  showList: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case TOGGLE_LIST:
      return {
        ...state,
        showList: !state.showList,
      };
    default:
      return state;
  }
};

export default reducer;

// import {Add_To_CART} from './constents';
// const initialState = [];

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Add_To_CART:
//       return [...state, action.data];
//     default:
//       return state;
//   }
// };
