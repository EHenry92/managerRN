import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, InputField, Button} from './common';
import {emailChanged, passChanged, loginUser} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPassChange(text) {
    this.props.passChanged(text);
  }
  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password})
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
          <Button onPress={this.onButtonPress.bind(this)}>
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


export default connect(mapState, {emailChanged, passChanged, loginUser})(LoginForm);
