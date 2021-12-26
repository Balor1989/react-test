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

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }))
  }
  render() {
    const {todos} = this.state
    return (
      <>
      <h1>Todo list</h1>
        <ToDoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}/>
        </>
    )
  }
}

export default App