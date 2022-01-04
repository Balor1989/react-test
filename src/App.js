import { Component } from "react";
import ToDoList from "./ToDoList/ToDoList";
import initTodos from './ToDoList/todos.json';
import ToDoEditor from "./ToDoEditor";
import shortid from "shortid";

class App extends Component {
  state = {
    todos: initTodos
  };

  addToDo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed:false
    }

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos]
    }))
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }));
  }

  toggleCompleted = todoId => {
    console.log(todoId)

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

  componentDidUpdate(prevState) {
    console.log('App componentDidUpdate')
    if (this.state.todos !== prevState.todos) {
      console.log("Обнова")
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
        console.log(prevState)
        console.log(this.state)
  }
  
  componentDidMount() {
    const todos = localStorage.getItem('todos')
    const parseTodos = JSON.parse(todos)
    if (!todos) {
      return
    }
    this.setState({ todos: parseTodos });
    console.log(todos)
  }

  render() {
    const {todos} = this.state
    return (
      <>
      <h1>Todo list</h1>
        <ToDoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
          
        />
        <ToDoEditor onSubmit={this.addToDo}/>
        </>
    )
  }
}



export default App