import { Component } from "react"
import ToDoList from "./ToDoList/ToDoList"




class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', completed: false }, 
      { id: 'id-2', text: 'Todo-2', completed: true }, 
      { id: 'id-3', text: 'Todo-3', completed: false }, 
    ],
  };
  
  render() {
    const {todos} = this.state
    return (
      <>
      <h1>Todo list</h1>
        <ToDoList todos={ todos } />
        </>
    )
  }
}

export default App