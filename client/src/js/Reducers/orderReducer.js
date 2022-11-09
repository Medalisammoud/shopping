const { GET_ALL_ORDER, ADD_PANEL, LOAD_ORDER, DELETE_PRODUCT_PANEL } = require("../Constants/actionTypes");


const initialState ={
    orders :[],
    products: [],
    countPanel : 0,
    sumPrice : 0,
    loadOrder : false
}

const orderReducer = (state=initialState,{ type, payload })=>{
    switch (type) {
        case LOAD_ORDER:
            return {...state,loadOrder : true};
        case GET_ALL_ORDER:
            return {
                ...state,
                orders : payload.Orders,
                countPanel : 0,
                products : [],
                sumPrice : 0,
                loadOrder : false
            };
        case ADD_PANEL:
            return {
                ...state,
                countPanel : state.countPanel + 1,
                products : [...state.products, payload],
                sumPrice : state.sumPrice + payload.productPrice ,
                loadOrder : false
            };
            case DELETE_PRODUCT_PANEL:
                const product = state.products.find(product=>product._id ===payload.id)
            return {
                ...state,
                countPanel : state.countPanel - 1,
                products : state.products.filter(product => product._id !== payload.id ? product : null ),
                sumPrice : state.sumPrice>(product.productPrice * payload.qty) ?  state.sumPrice - (product.productPrice * payload.qty) : 0,
                loadOrder : false
            };
    
        default:
            return state
    }
}

export default orderReducer;