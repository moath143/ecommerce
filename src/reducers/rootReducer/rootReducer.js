import { combineReducers } from "redux";
import itemsReducer from "./../itemsReducer/itemReducer";
import cartReducer from './../cartReducer/cartReducer';

const rootReducer = combineReducers({
    itemsReducer: itemsReducer,
    cartReducer: cartReducer
})


export default rootReducer;