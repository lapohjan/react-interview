import React from 'react'
import Hello from './Hello'

const TodoItems = ({ todo, onClick, onRemoveClick }) => {
  return (
    <div>
      {todo.map((todo) => (
        <Hello
          key={todo.id}
          todo={todo}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />
      ))}
    </div>
  );
}

export default TodoItems