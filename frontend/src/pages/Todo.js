import {useState} from 'react'
import useAxios from '../utils/useAxios'

const Todo = ({todo, index, completeTodo, removeTodo, getTodos}) => {
  const [isUpdate, setUpdate] = useState(false);
  let api = useAxios()

  const [value, setValue] = useState({
      title: '',
      description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await api.put(`/api/update/${todo.id}/`, {title: value.title, description: value.description, completed: todo.completed});
        getTodos(); 
        setUpdate(false)
    } catch (error) {
        console.error('Error adding todo:', error);
    }
  };
  return (
    <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
            {isUpdate ? (
                 <>
                 <form >
                    <input
                        type="text"
                        name="title"
                        className="input"
                        value={value.title}
                        placeholder={todo.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="description"
                        className="input"
                        value={value.description}
                        placeholder={todo.description}
                        onChange={handleInputChange}
                    />
                    <button type="submit" onClick={handleSubmit} >submit</button>
                </form>
                  <button onClick={() => setUpdate(false)}>cancel</button>
                 </>
            ): (
              <>
              {todo.title} - {todo.description}
              </>
            )}
              <button onClick={() => setUpdate(true)}>update</button>
            <button style={{ background: "red" }} onClick={() => removeTodo(todo.id)}>x</button>
              <button onClick={() => completeTodo(todo)}>Complete</button>
        </div>
  )
}

export default Todo

