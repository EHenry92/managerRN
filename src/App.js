import React, {Component} from 'react';
import {Provider, View, Text} from 'react-native';
import firebase from 'firebase';
import {creatStore} from 'redux';
import reducers from './reudcers';
import firebaseData from '../secrets';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseData);
  }
  render () {
    return (
      <Provider store={creatStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }

}

export default App;
