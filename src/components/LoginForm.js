import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, InputField, Button} from './common';
import {emailChanged} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  render () {
    return (
      <Card>
        <CardSection>
          <InputField
            label = "Email"
            placeholder = "example@email.com"
            onChangeText = {this.onEmailChange.bind(this)}
          />
        </CardSection>
        <InputField
            secureTextEntry
            label = "Password"
            placeholder = "password"
          />
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}


export default connect(null, emailChanged)(LoginForm);
