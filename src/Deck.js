import React, {Component} from 'react';
import {
  View,
  Animated,
  PanResponder

  } from 'react-native';

class Deck extends Component{

  constructor(props){

    super(props);

    const panResponder = PanResponder.create({

      onStartShouldSetPanResponder:() => true,
      onPanResponderMove:(event, gesture) => {
        console.log({...gesture});
      },
      onPanResponderRelease:() => {},

    });

    // to make panResponder variable accessable to all methods here.
    // panResponder is an independent object and can not be altered by using setState functions
    // panResponder can not be updated by setState.
    // other convention to do the same thing:
    // this.panResponder = panResponder;
    this.state = { panResponder };

  }

  renderCards(){
    return this.props.data.map(
      item => {
      return this.props.renderCard(item);
    });

  }

render(){

  return(

      <View { ...this.state.panResponder.panHandlers } >
      {this.renderCards()}
      </View>
  );

}


}

export default Deck;
