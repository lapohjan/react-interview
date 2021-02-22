import React from 'react'

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