import { Component } from "react";
import ToDoList from "./ToDoList/ToDoList";
import initTodos from './ToDoList/todos.json';

class App extends Component {
  state = {
    todos: initTodos
  };
  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }));
  }

  render() {
    const {todos} = this.state
    return (
      <>
      <h1>Todo list</h1>
        <ToDoList todos={ todos } onDeleteTodo={this.deleteTodo} />
        </>
    )
  }
}

export default App