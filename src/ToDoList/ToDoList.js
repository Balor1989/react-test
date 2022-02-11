import { connect } from "react-redux";
import todosActions from "../redux/todos/totos-action";

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
	<ul className="ToDoList">
		{todos.map(({ id, text, completed }) => (
			<li key={id}>
				<input
					type="checkbox"
					className="ToDoList__checkbox"
					checked={completed}
					onChange={() => onToggleCompleted(id)}
				/>
				<p>{completed}</p>
				<p>{text}</p>
				<button onClick={() => onDeleteTodo(id)}>Удалить</button>
			</li>
		))}
	</ul>
);

const mapStateToProps = (state) => ({
	todos: state.todos.items,
});

const mapDispatchToProps = (dispatch) => ({
	onDeleteTodo: () => null,
	onToggleCompleted: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
