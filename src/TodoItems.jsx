import React from 'react'
import NewTodo from './NewTodo'


function TodoItems({ todoArr, onDelete }) {


    return (
        <>

            {todoArr.length > 0 ?
                (
                    todoArr.map((item, index) => <NewTodo key={index} todoName={item.name} todoDate={item.date} handleOnDelete={() => { onDelete(index) }} />)
                ) :
                (
                    <p className='capitalize my-5'>please enter new todo !</p>
                )
            }



        </>
    )
}

export default TodoItems