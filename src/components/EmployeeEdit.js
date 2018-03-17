import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeEdit, employeeDelete} from '../actions';
import {Button, Card, CardSection, Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = {showModal: false};
  componentWillMount () {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }
  onButtonPress() {
    const {name, phone, shift, employee} = this.props;
    this.props.employeeEdit({name, phone, shift, uid: employee.uid});
  }
  onTextPress() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcomming shift is on ${shift}`);
  }
  onFirePress() {
    this.setState({showModal : true});
  }
  onAccept() {
    this.props.employeeDelete({uid: this.props.employee.uid});
  }
  onDecline() {
    this.setState({showModal : false})
  }
  render (){
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress = {this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onFirePress.bind(this)}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          visible= {this.state.showModal}
          onAccept = {this.onAccept.bind(this)}
          onDecline = {this.onDecline.bind(this)}
        >
          Are you sure you want to delete this employee?
        </Confirm>
      </Card>
    );
  }
}
const mapState = ({employeeForm}) => {
  const {name, phone, shift} = employeeForm;
  return {name, phone, shift};
};

export default connect(mapState, {employeeEdit, employeeUpdate, employeeDelete})(EmployeeEdit);
