import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';

import Deck from './Deck';

const DATA = [
  { id: 1, text: 'Amanda', age: 28, uri: 'http://images4.fanpop.com/image/photos/18100000/Amanda-S-3-amanda-seyfried-18126959-389-450.jpg' },
  { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
];

/*
{ id: 3, text: 'Scarlett', age: 25, uri: 'https://i.ytimg.com/vi/GOJZ5TIlc3M/maxresdefault.jpg' },
{ id: 4, text: 'Keira', age: 27, uri: 'http://www.bdprimeit.com/wp-content/uploads/Keira-Knightley-Most-beautiful-Hollywood-actress.jpg' },
{ id: 5, text: 'Ashley', age: 30, uri: 'https://s-media-cache-ak0.pinimg.com/736x/4c/89/67/4c8967fac1822eeddf09670565430fd5.jpg' },
{ id: 6, text: 'Jennifer', age: 24, uri: 'https://2.bp.blogspot.com/-Vy0NVWhQfKo/Ubma2Mx2YTI/AAAAAAAAH3s/LC_u8LRfm8o/s1600/aimee-teegarden-04.jpg' },
{ id: 7, text: 'Sarah', age: 28, uri: 'https://s-media-cache-ak0.pinimg.com/736x/41/75/26/4175268906d97492e4a3175eab95c0f5.jpg' },
*/

class DeckMain extends Component{

  renderCard(item){
    return(
      <Card
        key = {item.id}
        title={item.text}
        image = {{uri: item.uri}}
        >
        <Text style = {{marginBottom: 10}}>
          We can customize the card further!!
        </Text>
        <Button
            icon = {{name:'code'}}
            backgroundColor = '#397af8'
            title = 'View'
          />
      </Card>

    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
            data = {DATA}
            renderCard = {this.renderCard}
          />
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  });

export default DeckMain;
