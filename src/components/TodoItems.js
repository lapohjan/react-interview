import React from 'react'
import TodoList from './TodoList'

const TodoItems = ({ todo, onClick, onRemoveClick }) => {
  return (
    <div>
      {/* map all the todos for TodoList */}
      {todo.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />
      ))}
    </div>
  );
};

export default TodoItems