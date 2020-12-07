import {CLEAR_STARTUP, GET_STARTUP, STARTUP_ERROR, ADMIN_ERROR_STARTUP, LOAD_STARTUPS, CLEAR_STARTUPS} from '../actions/types'

const initialState = {
    startup: null,
    startups: [],
    loading: true,
    errors: {}
}

export default function(state= initialState, action){
  const {type, payload} = action

  switch (type) {
      case GET_STARTUP:
          return{
              ...state,
              startup: payload,
              loading: false
          }
       
        case STARTUP_ERROR:
        case CLEAR_STARTUP:    
            return{
              ...state,
              startup: null,
              loading: false,
              errors: payload
            }
        case LOAD_STARTUPS:
          return{
            ...state,
            startups: payload,
            loading: false
          }
        case ADMIN_ERROR_STARTUP:
          case CLEAR_STARTUPS:
          return{
            ...state,
            startups: [],
            loading: false
          } 
  
      default:
          return state
  }
}