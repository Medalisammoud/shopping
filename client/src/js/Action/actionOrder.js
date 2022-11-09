import axios from "axios"
import { ADD_PANEL, GET_ALL_ORDER, LOAD_ORDER, FAIL_ORDER, DELETE_PRODUCT_PANEL } from "../Constants/actionTypes"


//GET ALL Order
export const getAllOrder = () => async (dispatch) =>{
    dispatch({type : LOAD_ORDER})
    try {
        const result = await axios.get('/api/order/')
        dispatch({type : GET_ALL_ORDER, payload : result.data})
    } catch (error) {
        console.log(error);
    }
}

//POST NEW Order
export const addOrder = (newOrder) => async (dispatch) =>{
    try {
        await axios.post('/api/order/add',newOrder)
        dispatch(getAllOrder())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_ORDER, payload: error.response.data.errors })
    }
} 

//update Order
export const updateOrder = (id , order) => async (dispatch) =>{
    try {
        await axios.put(`/api/order/update/${id}`,order)
        dispatch(getAllOrder())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_ORDER, payload: error.response.data.msg })
    }
} 

//add panel
export const addPanel = (products) =>{
    return {
        type : ADD_PANEL,
        payload : products
    }
}

//delete panel
export const deleteProductPanel = (id,qty) =>{
    return {
        type : DELETE_PRODUCT_PANEL,
        payload : {id,qty}
    }
}