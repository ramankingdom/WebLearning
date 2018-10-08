import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoList';
import {connect}  from 'react-redux';
import RootReducer from './Reducers/RootReducer';

class App extends React.Component {
  render() {
    return (
      <ToDoList></ToDoList>
    )
  }
}

export default App;
