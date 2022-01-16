import { combineReducers } from "redux";
import { reducer } from "./reducer";

const reducers = combineReducers({
    allproducts : reducer
})

export default reducers