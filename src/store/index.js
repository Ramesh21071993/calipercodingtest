import products from "./products/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products
});

export default rootReducer;
