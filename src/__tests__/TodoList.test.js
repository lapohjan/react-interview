import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../components/TodoList'

//Default todos copied here for testing purposes,
//const name changed to 'tasks' to prevent any confusion
const tasks = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: false},
    {id: 5, name: 'Change car tyres', complete: false},
  ]


it('Should render', () => {
    shallow(<TodoList todo={tasks} />)
})