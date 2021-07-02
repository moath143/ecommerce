const iniCart = {
  cartItems: [],
};

const cartReducer = (state = iniCart, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "DELETE_ITEM_FROM_CART":
          return {
          ...state,
        cartItems: state.cartItems.filter((product) => {
          return product.itemName !== action.payload.itemName;
        }),
      };
    case 'CLEAR_ALL': return {
      ...state,
      cartItems: []
    }
  }
  return state;
};

export default cartReducer;
