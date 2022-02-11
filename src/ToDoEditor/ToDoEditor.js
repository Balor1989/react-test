import { Component } from "react";
import { connect } from "react-redux";
import todosActions from "../redux/todos/todos-actions";

class ToDoEditor extends Component {
	state = {
		message: "",
	};

	handleChange = (e) => {
		this.setState({ message: e.currentTarget.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.message);
		this.setState({ message: "" });
	};

	render() {
		return (
			<form className="ToDoEditor" onSubmit={this.handleSubmit}>
				<textarea
					value={this.state.message}
					onChange={this.handleChange}></textarea>
				<button type="submit">Создать</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (text) => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(ToDoEditor);
