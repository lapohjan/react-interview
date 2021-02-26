import React, { useState } from 'react'
import './App.css'
import TodoItems from './components/TodoItems'
import Bar from './components/Bar'

const todos = [
  {id: 1, name: 'Go to the supermarket', complete: false},
  {id: 2, name: 'Call Alice', complete: false},
  {id: 3, name: 'Ask Alice to call Bob', complete: false},
  {id: 4, name: 'Do the dishes', complete: false},
  {id: 5, name: 'Change car tyres', complete: false},
];

const App = () => {
  const [newTodoName, setNewTodoName] = useState('');
  const [todo, setTodo] = useState(todos);

  //add new todo to list when submitting form
  const onSubmit = (event) => {
    event.preventDefault();

    const newTodos = todo.slice();
    newTodos.push({
      id: todo.length + 1,
      name: newTodoName,
      complete: false,
    });

    setTodo(newTodos);
    setNewTodoName('');
  };

  //click to mark a todo complete/incomplete
  const onClick = (id) => {
    const todoItems = todo.slice();
    for (let i = 0; i < todo.length; i++) {
      if (todoItems[i].id === id) {
        let newComplete = !todoItems[i].complete;
        todoItems[i].complete = newComplete;
      }
    }
    setTodo(todoItems);
  };

  //set name for the new todo
  const onChange = (event) => {
    setNewTodoName(event.target.value);
  };

  //remove todo
  const onRemoveClick = (id) => {
    const remainingTodos = todo.filter((todo) => todo.id !== id);
    setTodo(remainingTodos);
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
};

export default App