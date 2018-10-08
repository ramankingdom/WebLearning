import React, { Component } from 'react';
import ToDoItem from './todoItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


class ToDoList extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return this.state.todos.map(element => {
            return (<ToDoItem body={element.body} key={element.id} />
            )
        })};

}

export default ToDoList;