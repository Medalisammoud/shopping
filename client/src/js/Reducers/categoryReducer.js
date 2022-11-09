import {  FAIL_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY, LOAD_CATEGORY } from "../Constants/actionTypes";


const initialState ={
    categorys :[],
    category: {},
    errors : {},
    loadcategory : false
}

const categoryReducer = (state=initialState,{ type, payload })=>{
    switch (type) {
        case LOAD_CATEGORY:
        return { ...state, loadcategory: true };
        case GET_ALL_CATEGORY:
            return {
                categorys : payload.categorys,
                errors : {},
                loadcategory : false
            };
        case GET_CATEGORY:
            return {
                category : payload.category,
                errors : {},
                loadcategory : false
                };
        case FAIL_CATEGORY:
            return { ...state, loadUser: false, errors: payload };
        case "VIDE_ERRORS":
            return { ...state, errors: {} };
        default:
            return state;
    }
}

export default categoryReducer;