// reducers/picnicReducer.js

const initialState = {
    // Define your initial state here
    cartItems: [],
  };
  
  const picnicReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default picnicReducer;
  