import {USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, SET_ADMIN, ALOGIN_SUCCESS ,LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT} from '../actions/types'

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    isAdmin: false
  };

  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
  
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          isAdmin: false
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:  
    //   case LOGOUT:
    //   case ACCOUNT_DEETED:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          isAdmin: false
        };
      
      case ALOGIN_SUCCESS:
        return{
          ...state,
          user: payload,
          loading: false,
          isAdmin: true,
          isAuthenticated: true
        }  
      default:
        return state;
    }
  };
    