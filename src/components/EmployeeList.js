import _ from 'lodash';
import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps){
    //access to nextProps (new) and this.Props (old)
    this.createDataSource(nextProps);
  }
  createDataSource({list}) {
    //gets called with props
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(list)
  }
  renderRow(employee) {
    return <ListItem employee = {employee} />
  }

  render () {
    console.log(this.props.list)
    return(
      <ListView
        enableEmptySections
        dataSource = {this.dataSource}
        renderRow = {this.renderRow}
      >
      </ListView>
    )
  }
}

const mapState = (state) => {
  const list = _.map(state.employeeList, (val, uid) =>{
    return {...val, uid}
  });
  return {list};
};
export default connect(mapState, {employeesFetch})(EmployeeList);
