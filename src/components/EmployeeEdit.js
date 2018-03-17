import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeEdit} from '../actions';
import {Button, Card, CardSection} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount () {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }
  onButtonPress() {
    const {name, phone, shift, employee} = this.props;
    this.props.employeeEdit({name, phone, shift, uId: employee.uid});
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
      </Card>
    )
  }
}
const mapState = ({employeeForm}) => {
  const {name, phone, shift} = employeeForm;
  return {name, phone, shift};
};

export default connect(mapState, {employeeEdit, employeeUpdate})(EmployeeEdit);
