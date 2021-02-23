import React from 'react'

//Input form and sumbit button for adding a new todo
const Bar = ({ onSubmit, newTodoName, onInputChange }) => {
    return (
      <form
        className='wrapper'
        style={{ 'grid-template-columns': '7fr 2fr' }}
        onSubmit={onSubmit}
      >
        <input
          placeholder='Add new todo'
          value={newTodoName}
          onChange={onInputChange}
        />
        <button className='btn btn-success' type='submit' value='Submit'>
          Submit
        </button>
      </form>
    );
  }

  export default Bar