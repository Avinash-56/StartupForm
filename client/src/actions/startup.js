import {GET_STARTUP, STARTUP_ERROR, ADD_STARTUP, LOAD_STARTUPS} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import {setAlert} from './alert'


export const getUserStartup = () => async dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
  try {
      const res = await axios.get('/api/startup/me')
      dispatch({
          type: GET_STARTUP,
          payload: res.data
      })
  } catch (err) {
    dispatch({
        type: STARTUP_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
    })  
    
  }    
}

export const addStartup = (formData, history) =>async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    
    try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
    
        const res = await axios.post("/api/startup", formData, config);
        dispatch({
          type: ADD_STARTUP,
          payload: res.data
        });
      
      history.push("/user-dashboard"); //Cannot use Redirect in actions, only components
  
    
       history.push("/user-dashboard"); //Cannot use Redirect in actions, only components
      
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
          type: STARTUP_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    };
    
   
  export const getAllStartups = () =>async dispatch =>{
    try {
         const res = await axios.get('/api/startup')

         dispatch({
           type: LOAD_STARTUPS,
           payload: res.data
         })
    } catch (err) {
      const errors = err.response.data.errors;
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
          type: STARTUP_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
  }

  export const getStartup = id => async dispatch => {
    try {
      const res = await axios.get(`/api/startup/${id}`);
      dispatch({
        type: GET_STARTUP,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: STARTUP_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };