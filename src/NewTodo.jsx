import React from 'react'

function NewTodo({ todoName, todoDate, handleOnDelete }) {


    return (
        <div className='flex lg:justify-evenly justify-around w-full items-center my-2 '>
            <div className=' lg:w-48 w-24 '>
                <h2 className='capitalize p-3 lg:text-xl text-sm  '>{todoName}</h2>
            </div>
            <div className='lg:w-48 w-22'>
                <h2 className='capitalize p-3 lg:ml-5 ml-0 lg:text-xl text-sm'>{todoDate}</h2>
            </div>
            <div>
                <button className='bg-red-600 py-3 px-4 rounded-xl text-white hover:cursor-pointer font-semibold' onClick={handleOnDelete}>Delete</button>
            </div>
        </div >
    )
}

export default NewTodo