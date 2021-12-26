

const ToDoList = ({ todos, onDeleteTodo}) => (
    <ul className="ToDoList">
        {todos.map(({ id, text, completed }) => (
            <li key={id}>
                <p>{completed}</p>
                <p>{text}</p>
                <button onClick={() => onDeleteTodo(id)} >Удалить</button>
            </li>
          ))}
          </ul>
)

export default ToDoList