import { useState } from "react";
import { useDispatch } from "react-redux";
import todosActions from "../redux/todos/todos-actions";

export default function ToDoEditor() {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch();

	const handleChange = (e) => setMessage(e.currentTarget.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (message === "") {
			alert("!!!");
			return;
		}

		dispatch(todosActions.addTodo(message));
		setMessage("");
	};

	return (
		<form className="ToDoEditor" onSubmit={handleSubmit}>
			<textarea value={message} onChange={handleChange}></textarea>
			<button type="submit">Создать</button>
		</form>
	);
}
