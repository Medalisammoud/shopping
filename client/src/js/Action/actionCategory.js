import axios from "axios"
import {  FAIL_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY, LOAD_CATEGORY} from "../Constants/actionTypes"



//GET ALL CATEGORYS
export const getAllCategory = () => async (dispatch) =>{
    dispatch({type : LOAD_CATEGORY})
    try {
        const result = await axios.get('/api/category/')
        dispatch({type : GET_ALL_CATEGORY, payload : result.data})
    } catch (error) {
        console.log(error);
    }
}

//POST NEW CATEGORY
export const addCategory = (newCategory) => async (dispatch) =>{
    dispatch({type : LOAD_CATEGORY})
    try {
        await axios.post('/api/category/add',newCategory)
        dispatch(getAllCategory())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_CATEGORY, payload: error.response.data.errors })
    }
} 

//GET CATEGORY
export const getCategory = (id) => async (dispatch) =>{
    dispatch({type : LOAD_CATEGORY})
    try {
        const result = await axios.get(`/api/category/${id}`)
        dispatch({type : GET_CATEGORY, payload : result.data})
    } catch (error) {
        console.log(error);
    }
}

//Update CATEGORY
export const updateCategory = (id , category) => async (dispatch) =>{
    dispatch({type : LOAD_CATEGORY})
    try {
        await axios.put(`/api/category/update/${id}`,category)
        dispatch(getAllCategory())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_CATEGORY, payload: error.response.data.msg })
    }
} 

//DELETE CATEGORY
export const deleteCategory = (id) => async (dispatch) =>{
    dispatch({type : LOAD_CATEGORY})
    try {
         await axios.delete(`/api/category/delete/${id}`)
        dispatch(getAllCategory())
    } catch (error) {
        console.log(error);
    }
} 