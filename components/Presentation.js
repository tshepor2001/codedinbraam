import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from '../styles';

class Presentation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Presentation</Text>
      </View>
    );
  }
}

module.exports = Presentation;
