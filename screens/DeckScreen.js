import React, {Component} from 'react';
import {View, Text} from 'react-native';

import DeckMain from '../src/DeckMain';

class DeckScreen extends Component{

  render(){

    return(
      <View>
        <DeckMain />
      </View>

    );

  }
}

export default DeckScreen;
