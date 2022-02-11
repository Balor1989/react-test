import { Component } from "react";
import ToDoList from "./ToDoList/ToDoList";
import initTodos from "./ToDoList/todos.json";
import ToDoEditor from "./ToDoEditor";
import shortid from "shortid";
import Filter from "./Filter/Filter";

class App extends Component {
	// state = {
	// 	// todos: initTodos,
	// 	filter: "",
	// };

	// addToDo = (text) => {
	// 	const todo = {
	// 		id: shortid.generate(),
	// 		text,
	// 		completed: false,
	// 	};

	// 	this.setState((prevState) => ({
	// 		todos: [todo, ...prevState.todos],
	// 	}));
	// };

	deleteTodo = (todoId) => {
		this.setState((prevState) => ({
			todos: prevState.todos.filter((todo) => todo.id !== todoId),
		}));
	};

	toggleCompleted = (todoId) => {
		this.setState((prevState) => ({
			todos: prevState.todos.map((todo) => {
				if (todo.id === todoId) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			}),
		}));
	};

	// componentDidUpdate(prevState) {
	// 	console.log("App componentDidUpdate");
	// 	if (this.state.todos !== prevState.todos) {
	// 		localStorage.setItem("todos", JSON.stringify(this.state.todos));
	// 	}
	// }

	// componentDidMount() {
	// 	const todos = localStorage.getItem("todos");
	// 	const parseTodos = JSON.parse(todos);
	// 	if (!todos) {
	// 		return;
	// 	}
	// 	this.setState({ todos: parseTodos });
	// }

	// filterChange = (e) => {
	// 	this.setState({ filter: e.target.value });
	// };

	render() {
		// const { todos, filter } = this.state;

		// const normalizedFilter = filter.toLowerCase();

		// const visibleContactCards = todos.filter((contact) =>
		// 	contact.name.toLowerCase().includes(normalizedFilter),
		// );
		return (
			<>
				<h1>Todo list</h1>
				{/* <ToDoList
					todos={todos}
					onDeleteTodo={this.deleteTodo}
					onToggleCompleted={this.toggleCompleted}
				/> */}
				{/* <Filter onFilterChange={this.filterChange} /> */}
				<ToDoEditor />
			</>
		);
	}
}

export default App;
