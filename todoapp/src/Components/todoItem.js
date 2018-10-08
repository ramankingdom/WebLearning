import React, { Component } from 'react';
class ToDoItem extends React.Component  {
   

    render() {
        return (
            <div>
                <input type="checkbox" name="todocheck"></input>
                <label htmlFor="todocheck">{this.props.body}</label>
            </div>
        );
    }
}

export default ToDoItem;