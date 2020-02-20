import React, {useState} from 'react';



function Todo({todo, index, completeTodo }){
return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}><li>
    {todo.text}
    </li>
    <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
    </div>
    </div>

}

function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value); 
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={e=> setValue(e.target.value)}/>
        </form>
    )
}

function App() {
    const [todos,setTodos] = useState([
    {
        text: 'Learn about React',
        isCompleted: false
    },
    {
        text: 'Meet Friend',
        isCompleted: false
    },
    {
        text: 'Build Cool ToDo App',
        isCompleted: false
    },
]);

const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
}

const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);

}

return(
    <div className="hooks">
        <div className="todo-list">
            {todos.map((todo, index)=>(
                <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    </div>
)
}

export default App;