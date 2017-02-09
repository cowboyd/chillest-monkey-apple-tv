/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Dimensions from 'Dimensions';

import ChillestMonkey from 'react-native-chillest-monkey';

export default class ChillestMonkeyTV extends Component {
  render() {
    let { height, width } = Dimensions.get('window');
    return (
      <ChillestMonkey style={{height: height, width: width}}/>
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
});

AppRegistry.registerComponent('ChillestMonkeyTV', () => ChillestMonkeyTV);
