import todosActions from "../redux/todos/todos-actions";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleTodos } from "../redux/todos/todos-selectors";

export default function ToDoList() {
	const todos = useSelector(getVisibleTodos);

	const dispatch = useDispatch();

	const onToggleCompleted = (id) => {
		dispatch(todosActions.toggleCompleted(id));
	};

	const onDeleteTodo = (id) => {
		dispatch(todosActions.deleteTodo(id));
	};

	return (
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
}

// const mapStateToProps = (state) => {
// 	const { filter, items } = state.todos;
// 	const normalizedFilter = filter.toLowerCase();

// 	const visibleTodos = items.filter(({ text }) =>
// 		text.toLowerCase().includes(normalizedFilter),
// 	);

// 	return {
// 		todos: visibleTodos,
// 	};
// };

// const mapDispatchToProps = (dispatch) => ({
// 	onDeleteTodo: (id) => dispatch(todosActions.deleteTodo(id)),
// 	onToggleCompleted: (id) => dispatch(todosActions.toggleCompleted(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
