import React from 'react'

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
      <div className='wrapper' style={{ backgroundColor: color }}>
        <h3>{todo.name}</h3>
        <button className='btn' onClick={() => onClick(todo.id)}>
          {text}
        </button>
        <button className='btn' onClick={() => onRemoveClick(todo.id)}>
          Remove from list
        </button>
      </div>
    );
  }

  export default Hello