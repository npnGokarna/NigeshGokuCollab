import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';

import * as Action from '../action';

class AuthScreen extends Component{


/*componentDidMount(){
  this.props.facebookLogin();
  this.onAuthComplete(this.props);
  //only for test purposes
  //AsyncStorage.removeItem('fb_token') frmoves fb_token from Async Storage
  // so that every time the app is reloaded, it will ask for facebook authentication
  //AsyncStorage.removeItem('fb_token');
}
//whenever the component is about to re-render
componentWillReceiveProps(nextProps){
  this.onAuthComplete(nextProps);
  //AsyncStorage.removeItem('fb_token');

}
*/

onAuthComplete(props){

  if(props.token){
    AsyncStorage.removeItem('fb_token');
    this.props.navigation.navigate('deckScreen');

  }

}
onGoogleButtonPress(){
  //AsyncStorage.removeItem('google_token');
  //this.props.signInWithGoogleAsync();
  //this.props.navigation.navigate('landingPage');
  alert('Google Login Pressed');
  this.onAuthComplete(this.props);
}
onFacebookButtonPress(){
  //AsyncStorage.removeItem('fb_token');
  this.props.facebookLogin();
  //this.props.navigation.navigate('landingPage');
}



  render(){

    return(
      <View>
        <View style = {{paddingTop: 10}}/>
        <Button
          raised
          title = 'Google SignIn'
          backgroundColor = '#C12003'
          onPress = {this.onGoogleButtonPress.bind(this)}
          />
        <View style = {{paddingTop: 10}} />
        <Button
          title = 'Facebook Login'
          raised
          backgroundColor = '#2874A6'
          onPress = {this.onFacebookButtonPress.bind(this)}
          />
      </View>

    );

  }
}




const mapStateToProps = ({auth}) =>{

  return {token: auth.token};
}



export default connect(mapStateToProps, Action)(AuthScreen);
