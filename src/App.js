import React, {useState} from 'react';
import './App.css';

const todos = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: false},
    {id: 5, name: 'Change car tyres', complete: false}
];

const App = () => {
    const [newTodoName, setNewTodoName] = useState('');
    const [todo, setTodo] = useState(todos);

    function generateNewId() {
        return todo.length + 1;
    }

    function onSubmit(event) {
        event.preventDefault();

        let newTodos = todo.slice();
        newTodos.push({
            id: generateNewId(),
            name: newTodoName,
            complete: false
        });

        setTodo(newTodos);
        setNewTodoName('');
    }

    function onClick(id) {
        const todoItems = todo.slice();
        for (let i = 0; i < todo.length; i++) {
            if (todoItems[i].id === id) {
                let newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }
        setTodo(todoItems)   
    }

    function onChange(event) {
        setNewTodoName(event.target.value);
    }

    function onRemoveClick(id) {
        //implement this logic
        console.log('Remove Item!');
        console.log(id);
    }

    function TodoItems({ todo, onClick, onRemoveClick }) {
        return (
            <div>
             { todo.map ((todo) => (
               <Hello
               key={todo.id}
               todo={todo}
               onClick={onClick}
               onRemoveClick={onRemoveClick}
                />
               ))
             }
            </div>
             )
    };

    
    return (
        <div>
            <Bar
                onSubmit={onSubmit}
                newTodoName={newTodoName}
                onInputChange={onChange}
            />
            <TodoItems
                todo={todo}
                onClick={onClick}
                onRemoveClick={onRemoveClick}
            />
         </div>
    );
    
}

function Hello({ todo, onClick, onRemoveClick }) {
    console.log(todo);
    let color;
    let text;

    if (todo.complete === true) {
        color = 'lightgreen';
        text = 'Complete';
    } else {
        color = 'pink';
        text = 'Incomplete';
    }

    return (
        <div className="wrapper" style={{backgroundColor: color}}>
            <h3>{todo.name}</h3>
            <button
                className="btn"
                onClick={() => onClick(todo.id)}>
                {text}
            </button>
            <button
                className="btn"
                onClick={() =>
                    onRemoveClick(todo.id)
                }>
                Remove from list
            </button>
        </div>
    );
}


function Bar({ onSubmit, newTodoName, onInputChange }) {
    return (
        <form
            className="wrapper"
            style={{'grid-template-columns': '7fr 2fr'}}
            onSubmit={onSubmit}>
            <input
                placeholder="Add new todo"
                value={newTodoName}
                onChange={onInputChange}
            />
            <button
                className="btn btn-success"
                type="submit"
                value="Submit">
                Submit
            </button>
        </form>
    );
}


export default App;
