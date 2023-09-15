const Todo = ({todo, index, completeTodo, removeTodo}) => {
  return (
    <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
            {todo.title} - {todo.description}
            <button style={{ background: "red" }} onClick={() => removeTodo(todo.id)}>x</button>
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
        </div>
  )
}

export default Todo

