import React, {useState, useEffect} from 'react'
import useAxios from '../utils/useAxios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

const TodosPage = () => {
    let [todos, setTodos] = useState([])
    const [todoRemaining, setTodoRemaining] = useState(0);

    let api = useAxios()

    useEffect(()=> {
        getTodos()
    }, [])


    var getTodos = async() =>{
        let response = await api.get('/api/')
        if(response.status === 200){
            setTodos(response.data)
        }
        
    }

    useEffect(() => { setTodoRemaining(todos.filter(todo => !todo.completed).length) });


    const addTodo = async (value_args) => {
        try {
            await api.post('/api/create/', {title: value_args.title, description: value_args.description});
            getTodos(); 
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const completeTodo = async (todo) => {
        try {
            await api.put(`/api/update/${todo.id}/`, {title: todo.title, description: todo.description, completed: !todo.completed});
            getTodos(); 
        } catch (error) {
            console.error('Error toggling todo completion:', error);
        }
    };

    const removeTodo = async (id) => {
        try {
            await api.delete(`/api/delete/${id}/`);
            getTodos(); 
        } catch (error) {
            console.error('Error toggling todo deletion:', error);
        }
    };

    return (
        <div>
            <h1>Todo Page</h1>
            <div className="header">Pending todos ({todoRemaining})</div>
            <ul>
                {todos.map((todo, index) => (
                    <Todo key={todo.id} index={index} todo={todo} 
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    getTodos={getTodos}
                    />
                ))}
            </ul>
            <div className="create-todo" >
                <CreateTodo addTodo={addTodo} />
            </div>
        </div>
    )
}

export default TodosPage
