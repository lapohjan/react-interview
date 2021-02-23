import React from 'react'

function Hello({ todo, onClick, onRemoveClick }) {
    let color;
    let text;
  
    //If todo is complete: background is lightgreen & text is 'Complete'
    if (todo.complete === true) {
      color = 'lightgreen';
      text = 'Complete';
    //If todo is not complete: background is pink & text is 'Incomplete'
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