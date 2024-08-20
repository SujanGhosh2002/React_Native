import axios from 'axios';
import {FETCH_DATA_SUCCESS, TOGGLE_LIST} from './constents';

export const toggleList = () => ({
  type: TOGGLE_LIST,
});

export const fetchData = () => async dispatch => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// import {Add_To_CART} from './constents';

// export function addToCart(item: item): {} {
//   return {
//     type: Add_To_CART,
//     data: item,
//   };
// }
