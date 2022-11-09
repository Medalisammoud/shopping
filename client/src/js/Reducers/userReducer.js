import { CURRENT_USER, FAIL_USER, GET_ALL__USERS, LOAD_USER, LOGOUT_USER, SIGNIN_USER, SIGNUP_USER } from "../Constants/actionTypes";

const initialState = {
    user: {},
    users:[],
    isAuth: false,
    admin:false,
    loadUser: false,
    errors: [],
  };
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_USER:
        return { ...state, loadUser: true };
      case SIGNUP_USER:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          loadUser: false,
          user: payload.user,
          isAuth: true,
          errors: [],
        };
      case SIGNIN_USER:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          loadUser: false,
          user: payload.user,
          isAuth: true,
          admin : payload.user.role===1 ? true : false,
          errors: [],
        };
      case CURRENT_USER:
        return {
          ...state,
          loadUser: false,
          user: payload,
          admin : payload.role===1 ? true : false,
          isAuth: true,
          errors: [],
        };
        case GET_ALL__USERS:
        return {
          ...state,
          loadUser: false,
          users : payload.users
        };
      case FAIL_USER:
        return { ...state, loadUser: false, errors: payload };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return {
          ...state,
          loadUser: false,
          errors: [],
          user: {},
          admin:false,
          isAuth: false,
        };
      case "VIDE_ERRORS":
        return { ...state, errors: [] };
      default:
        return state;
    }
  };
  export default userReducer;