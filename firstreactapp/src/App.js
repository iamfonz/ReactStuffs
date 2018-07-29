import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import ToDos from './Components/ToDos'
import uuid from 'uuid';
import $ from 'jquery';
//import './App.css';

class App extends Component {
  constructor(){
    super();
    //this is where we define our state keys
    this.state = {
      projects:[]
    }
  }

  handeDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x=> x.id ===id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  getToDos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Businesss Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Dev'
      },
      {
        id: uuid.v4(),
        title: 'E-Commerce Shopping Cart',
        category: 'Web Dev'
      }
    ]});
  }


  componentDidMount(){
    this.getToDos();
  }

  componentWillMount(){
    this.getToDos();
    this.getProjects();
  }

  handleAddProject(project){
    console.log(project);
    let projects =this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects onDelete={this.handeDeleteProject.bind(this)} projects = {this.state.projects}/>
        <hr/>

        <ToDos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
