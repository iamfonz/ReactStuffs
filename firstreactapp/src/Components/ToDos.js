import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDos extends Component {


  render() {

    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return(

          <ToDoItem key={todo.title} todo={todo} />
        );
      });
    }
    //console.log(this.props);

    return (
      <div className="Todos">
        <h3>To-Do Items List </h3>
        {todoItems}
      </div>
    );
  }
}

ToDos.propTypes = {
  todos: PropTypes.array,
}

export default ToDos;
