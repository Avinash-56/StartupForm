import { USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS , ALOGIN_SUCCESS, SET_ADMIN, LOGOUT, CLEAR_STARTUP, REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_STARTUPS} from "./types";
import axios from "axios";
import {setAlert} from './alert'
import setAuthToken from '../utils/setAuthToken'
import {getAllStartups} from './startup'


export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
      console.log(err.response.data)
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const adminLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {

    const res = await axios.post("/api/auth/admin", body, config);
    dispatch({
        type: ALOGIN_SUCCESS,
        payload: res.data,
      });
    dispatch(getAllStartups())
  
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


export const register = ({ name, email, password }) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("/api/auth/register", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL
      });
    }
  };

    export const logout = () => dispatch => {
        dispatch({ type: CLEAR_STARTUP });
        dispatch({type: CLEAR_STARTUPS})
        dispatch({ type: LOGOUT });
    };


    export const checkAdmin = (token) =>dispatch =>{
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

    
      const body = JSON.stringify({ token });
      try {
        const res = axios.put('/api/auth/check-admin', body, config)
        dispatch({
          type: SET_ADMIN,
          payload: res.data
        })
      } catch (err) {
        console.error(err.message)
      }
   

    }