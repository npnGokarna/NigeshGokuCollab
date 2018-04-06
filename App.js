import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import DeckScreen from './screens/DeckScreen';

export default class App extends React.Component {
  render() {

    const MainNavigator = TabNavigator({
      //define a key and define what screen to go to

      authScreen: {screen: AuthScreen},
      deckScreen: {screen: DeckScreen},
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });
    return (
      <Provider store = {store}>
      <ScrollView>
      <MainNavigator />
      </ ScrollView>
      </ Provider>
    );
  }
}
