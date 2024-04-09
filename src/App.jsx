import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './redux/components/AddTodo'
import Todo from './redux/components/Todo'

function App() {
  
  

  return (
    <>
      <h1>learn about redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
