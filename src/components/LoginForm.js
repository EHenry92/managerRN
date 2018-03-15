import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, InputField, Button, Spinner} from './common';
import {emailChanged, passChanged, loginUser} from '../actions';
import {View, Text} from 'react-native';

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
          {
            this.props.error &&
            <View style={{backgroundColor: 'white'}}>
              <Text style={styles.errorTextStyle}>
                {this.props.error}
              </Text>
            </View>
          }
        <CardSection>
          {
            this.props.loading ?
            <Spinner size={'large'} />
            :
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
          }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapState = ({auth}) => {
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading
  };
};

export default connect(mapState, {emailChanged, passChanged, loginUser})(LoginForm);
