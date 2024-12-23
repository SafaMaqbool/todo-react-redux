import React from 'react'
import { useDispatch } from 'react-redux'

const Todo = () => {
//dispatch is ued to send your action to the store 
  const dispatch= useDispatch()
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center text-blue-700 uppercase'>TODO LIST APP</h2>
      {/* input and buttons  */}
      <div className='flex items-center mb-4'>
        <input type="text"
        placeholder='enter task'
        className='flex-grow p-2 border border-gray-300 rounded border-b-2 focus:outline-none focus:border-blue-500'
        name='text' id='addTodo' />
      </div>
    </div>
  )
}

export default Todo