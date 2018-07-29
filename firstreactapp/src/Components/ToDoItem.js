import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  render() {
    //console.log(this.props);

    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

ToDoItem.propTypes={
  todo: PropTypes.object,
}

export default ToDoItem;
