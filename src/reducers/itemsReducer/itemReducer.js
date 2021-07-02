import data from "../data/itemsData";
const iniDataItem = {
  itemsProduct: data,
};

const itemsReducer = (state = iniDataItem, action) => {
  switch (action.type) {
    case 'ADD_ITEM': return {
      ...state,
      itemsProduct: [...state.itemsProduct, action.paylod]
    }
  }
  return state;
};

export default itemsReducer;
