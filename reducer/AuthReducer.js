import {

  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL

} from '../action/types';

INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) =>{

  switch(action.type){
    case FB_LOGIN_SUCCESS:
      return { token: action.payload};
    case FB_LOGIN_FAIL:
      return { token: null};
    default:
      return state;

  }

}
