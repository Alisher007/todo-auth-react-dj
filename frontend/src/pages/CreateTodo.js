import {useState } from 'react'

const CreateTodo = ({addTodo}) => {
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

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue({
            title: '',
            description: ''
        });
    }
    return (
        <form >
            <input
                type="text"
                name="title"
                className="input"
                value={value.title}
                placeholder="title"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="description"
                className="input"
                value={value.description}
                placeholder="description"
                onChange={handleInputChange}
            />
            <button type="submit" onClick={handleSubmit} >submit</button>
        </form>
    );
}

export default CreateTodo


