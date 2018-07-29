import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Dev', 'Mobile Dev']
  }

  handleSubmit(event){
    //console.log('datasubmited', this.refs.title.value);

    if(this.refs.title.value ===''){
      alert('Title is required');
    } else{
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    event.preventDefault();

  }


  render() {
    let categoryOptions =this.props.categories.map(category=>{
      return <option key={category} value={category}>{category}</option>
    })
    return(
      <div >
        <h3>Add A New Project </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label><br/>
          <input type="text" ref="title" />
        </div>

        <div>
          <label>Category</label><br/>
          <select type="text" ref="category" >
            {categoryOptions}
          </select>
        </div>
        <input type="submit" value="Submit" />

        </form>
        <br/>
      </div>
    )
  }
}

AddProject.propTypes = {
  categories : PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
