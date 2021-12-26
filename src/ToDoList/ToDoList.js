

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted}) => (
    <ul className="ToDoList">
        {todos.map(({ id, text, completed }) => (
            <li key={id}>
                <input type="checkbox"
                    className="ToDoList__checkbox"
                    checked={completed}
                onChange={() => onToggleCompleted(id)}/>
                <p>{completed}</p>
                <p>{text}</p>
                <button onClick={() => onDeleteTodo(id)} >Удалить</button>
            </li>
          ))}
          </ul>
)

export default ToDoList