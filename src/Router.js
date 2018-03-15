import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
{/* Parent / Root Scene */}
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key= "login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main" hideNavBar>
          <Scene key="employeeList" component={EmployeeList} title="List of Employees" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
