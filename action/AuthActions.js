import {AsyncStorage} from 'react-native';

import { Facebook } from 'expo';


import {

  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL

} from './types';

//How to use AsyncStorage
//to store a key value pair:
//AsyncStorage.setItem('fb_token/key', value/token);
//AsyncStorage.getItem('fb_token/key');

export const facebookLogin = () => async (dispatch) => {
  let token = await AsyncStorage.getItem('fb_token');
  if(token){
    //if token exists, dispatch an action saying FB ligin done
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token});
  }
  else{
    //else start fb login process
    //pass dispatch function to helper function so that the helper function
    //too could use the dispatch function.
    doFacebookLogin(dispatch);

  }
};


const doFacebookLogin = async (dispatch) =>{
// result is the object that comes back from facebook login process
// result stores {type, token}
// type is used to specify whether or not authentication process was successful
//if user enters incorrect info then type === 'cancel'
  let {type, token} = await Facebook.logInWithReadPermissionsAsync('488970244805141', {
    permissions: ['public_profile']
  });

  if(type === 'cancel'){
    return dispatch({type: FB_LOGIN_FAIL});
  }

  await AsyncStorage.setItem('fb_token', token);

  dispatch({ type: FB_LOGIN_SUCCESS, payload: token});

};

/*
export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if(token){
    //if token exists, dispatch an action saying FB ligin done

  }
  else{
    //else start fb login process

  }
};

up given function is same to:

export const facebookLogin = () =>{
  return async (dispatch) => {
  let token = await AsyncStorage.getItem('fb_token');
  if(token){
    //if token exists, dispatch an action saying FB ligin done

  }
  else{
    //else start fb login process

  }
}

};
*/
