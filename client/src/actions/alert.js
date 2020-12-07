import { SET_ALERT, REMOVE_ALERT, CLEAN_ALERT } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuidv4()
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};

export const removeAlert = () =>dispatch =>{
  setTimeout(() => dispatch({ type: CLEAN_ALERT}), 5000)
}