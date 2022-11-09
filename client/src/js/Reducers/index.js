import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer"
import productReducer from "./productReducer"
import orderReducer from './orderReducer'
import favoriteReducer from './favoriteReducer'

const rootReducer = combineReducers({ userReducer, categoryReducer, productReducer, orderReducer, favoriteReducer });
export default rootReducer;