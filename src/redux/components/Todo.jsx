import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../slices/counter/todoSlice'


function Todo() {

   const todos =  useSelector(state => state.todos)
   const dispatch = useDispatch()


  return (
    <>
    <div className='mt-[100px] mb-4'>
      <h1 className='underline'>All List</h1></div>
    <ul className='list-none'>
    {todos.length > 0 ? todos.map((todo) => (
        <li  className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'   key={todo.id}>
        <div className='text-white'>{todo.text}</div>


        <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'>X</button>




        </li>
        




    ))
  : 
  <h1>No task</h1>
  }
    </ul>
    </>
  )

  
}

export default Todo