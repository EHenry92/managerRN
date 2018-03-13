import React, {Component} from 'react';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {createStore} from 'redux';
import reducers from './reducers';
import firebaseData from '../secrets';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseData);
  }
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
       </Provider>
    )
  }

}

export default App;
