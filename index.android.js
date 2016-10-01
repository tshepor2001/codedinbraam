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
import Presentation from './components/Presentation';

class ratemyprezie extends Component {
  render() {
    return (
      <Presentation/>
    );
  }
}


AppRegistry.registerComponent('ratemyprezie', () => ratemyprezie);
