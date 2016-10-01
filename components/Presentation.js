import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import styles from '../styles';
import {Toolbar, Card} from 'react-native-material-design';

class Presentation extends Component {
  render() {
    const presentations =  [{"id": 1, "title": "Presentation 1"}, {"id": 2, "title": "Presentation 2"}]
    const presentationCards = presentations.map((presentation) => {
      return <Card key={presentation.id}>
        <Card.Body>
          <Text>{presentation.title}</Text>
        </Card.Body>
      </Card>
    })
    return (
      <View>
        <Toolbar title={"Rate my Presentation"} icon={"menu"} style={styles.toolbar}/>
        <ScrollView style={styles.list}>
          {presentationCards}
        </ScrollView>
      </View>
    );
  }
}

module.exports = Presentation;
