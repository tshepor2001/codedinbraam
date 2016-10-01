import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from '../styles';
import {Toolbar} from 'react-native-material-design';

class Presentation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title={"Rate my Presentation"} icon={"menu"} style={styles.toolbar}/>
      </View>
    );
  }
}

module.exports = Presentation;
