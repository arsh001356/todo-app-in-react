import React from 'react'
import AddTodo from './AddTodo'
import { useState } from 'react'
import TodoItems from './TodoItems'
import Alert from './Alert'


function App() {
  let [name, setName] = useState('')
  let [date, setDate] = useState('')
  const [showAlert, setShowAlert] = useState("hidden")
  let [todoArr, setTodoArr] = useState([


  ])


  const handleOnTask = (event) => {
    setName(event.target.value)


  }
  const handleOnChangeDate = (event) => {
    setDate(event.target.value)

  }
  const addBtn = () => {
    if (!name || !date) {
      console.log("Please fill both todo and date to continue")
      setShowAlert("block")
      setTimeout(() => {
        setShowAlert("hidden")
      }, 3000);

    }
    else {

      let newTodo = [...todoArr, { name, date }]
      setTodoArr(newTodo)
      setName('')
      setDate('')
      setShowAlert("hidden")
    }
  }

  const onDelete = (index) => {
    const newTodoArr = [...todoArr];
    newTodoArr.splice(index, 1);
    setTodoArr(newTodoArr);

  }
  return (
    <>
      <div className='w-screen h-screen '>

        <Alert alert={showAlert} />

        <div className='flex flex-col items-center bg-slate-200 lg:w-[40rem] w-[20rem] mx-auto mt-10 rounded-lg' >
          <h1 className='text-4xl font-bold italic text-center container mt-5'>Todo App</h1>
          <AddTodo
            handleOnTask={handleOnTask}
            handleOnChangeDate={handleOnChangeDate}
            addBtn={addBtn}
            name={name}
            date={date} />
          <TodoItems todoArr={todoArr} onDelete={onDelete} />
        </div>
      </div>
    </>
  )
}

export default App