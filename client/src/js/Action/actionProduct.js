import axios from "axios"
import { FAIL_PRODUCT, GET_ALL_PRODUCT, LOAD_PRODUCT } from "../Constants/actionTypes"

//GET ALL Products
export const getAllProduct = () => async (dispatch) =>{
    dispatch({type : LOAD_PRODUCT})
    try {
        const result = await axios.get('/api/product/')
        dispatch({type : GET_ALL_PRODUCT, payload : result.data})
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data.msg })
    }
}

//Post Product
export const addProduct = (product) => async (dispatch) =>{
    dispatch({type : LOAD_PRODUCT})
    try {
        await axios.post('/api/product/add',product)
        dispatch(getAllProduct())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data.msg })
    }
}

//update Product
export const updateProduct = (id, product) => async(dispatch) =>{
    try {
        await axios.put(`/api/product/update/${id}`,product);
        dispatch(getAllProduct());
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data.msg })
    }
}

//Delete Product
export const deleteProduct = (id) => async(dispatch) =>{
try {
    await axios.delete(`/api/product/delete/${id}`);
    dispatch(getAllProduct())
} catch (error) {
    console.log(error);
}
}