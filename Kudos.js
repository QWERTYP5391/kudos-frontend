/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Button,
  Text
} from 'react-native';

const skills = ["Shooting" , "Dunking", "Passing", "Defending"]

  function getPlayersFromApiAsync() {
    return fetch('http://localhost:8080/players')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

var players = getPlayersFromApiAsync()

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}> {skills[0]}</Text>
        <Image
          style={styles.player}
          source={{uri: 'https://nba-players.herokuapp.com/players/anthony/carmelo'}}
        />
        <Button
          //onPress={onPressLearnMore}
          title="Select"
          color="#841584"
        />
        <Image
          style={styles.player}
          source={{uri: 'https://nba-players.herokuapp.com/players/james/lebron'}}
        />
        <Button
          //onPress={onPressLearnMore}
          title="Select"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    marginBottom: 5,
    width: 250,
    height: 250,
  },
});
