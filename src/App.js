import React, {Component} from 'react';
import {Provider, View, Text} from 'react-native';
import firebase from 'firebase';
import {creatStore} from 'redux';
import reducers from './reudcers';
import firebaseData from '../secrets';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseData);
  }
  render () {
    return (
      <Provider store={creatStore(reducers)}>
        <View>
          <Text>
            Hey!!
          </Text>
        </View>
      </Provider>
    )
  }

}

export default App;
