import { ActionTypes } from "../constant/ActionTypes";

const initialState = {
    products : [],
}

export const reducer = (state = initialState,{ type,payload }) =>{
    switch(type){
        case ActionTypes.ADD_PRODUCTS:
            return {...state,products:payload}

        default:
            return state;
    }
}