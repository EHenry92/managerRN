import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, InputField, Button} from './common';
import {emailChanged, passChanged} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPassChange(text) {
    this.props.passChanged(text);
  }
  render () {
    return (
      <Card>
        <CardSection>
          <InputField
            label = "Email"
            placeholder = "example@email.com"
            value = {this.props.email}
            onChangeText = {this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
        <InputField
            secureTextEntry
            label = "Password"
            placeholder = "password"
            value={this.props.password}
            onChangeText = {this.onPassChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapState = ({auth}) => {
  return {
    email: auth.email,
    password: auth.password
  };
};


export default connect(mapState, {emailChanged, passChanged})(LoginForm);
