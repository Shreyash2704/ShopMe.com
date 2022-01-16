import { ActionTypes } from "../constant/ActionTypes";

export const addProduct = (product) =>{
    return {
        type : ActionTypes.ADD_PRODUCTS,
        payload : product 
    }
}
export const setProducts = (products) =>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (product) =>{
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : product
    }
}