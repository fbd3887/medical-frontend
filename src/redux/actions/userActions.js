import { ActionTypes } from "../constants/action-types"

export const setLoggedUser=(user)=>{
 return {
  type : ActionTypes.SET_LOGGED_USER,
  payload : user
 }
}