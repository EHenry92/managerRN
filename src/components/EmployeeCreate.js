import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {Picker, Text} from 'react-native';
import {Card, CardSection, InputField, Spinner, Button} from './common';
class EmployeeCreate extends Component {
  render (){
    const {name, phone, shift, employeeUpdate} =  this.props;
    return (
      <Card>
        <CardSection>
          <InputField
            label = "Name"
            placeholder = "John Doe"
            value = {name}
            onChangeText = {(text) => employeeUpdate({prop:'name',value: text})}
          />
        </CardSection>

        <CardSection>
          <InputField
            label = "Phone"
            placeholder=" 555-5555"
            value = {phone}
            onChangeText = {(text) => employeeUpdate({prop:'phone',value: text})}
            />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerLableStyle}>Shift</Text>
          <Picker
            style = {{flex: 1}}
            selectedValue = {shift}
            onValueChange = {(value) => employeeUpdate({prop:'shift',value})}
            >
            <Picker.Item label='Monday' value= 'Monday' />
            <Picker.Item label='Tuesday' value= 'Tuesday' />
            <Picker.Item label='Wednesday' value= 'Wednesday' />
            <Picker.Item label='Thursday' value= 'Thursday' />
            <Picker.Item label='Friday' value= 'Friday' />
            <Picker.Item label='Saturday' value= 'Saturday' />
            <Picker.Item label='Sunday' value= 'Sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLableStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}
const mapState = ({employeeForm}) => {
  const {name, phone, shift} = employeeForm;
  return {name, phone, shift};
}

export default connect(mapState, {employeeUpdate})(EmployeeCreate);
