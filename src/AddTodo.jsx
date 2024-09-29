import React from 'react'


function AddTodo({ handleOnChangeDate, handleOnTask, addBtn, name, date }) {



    return (

        <div className='flex justify-evenly w-full mt-5 mb-2 items-center'>
            <div className='lg:flex-row lg:justify-evenly  lg:w-full w-[90%] flex flex-col gap-y-2 '>
                <div  >
                    <input type="text" placeholder='enter todo here' className='capitalize p-3 rounded-lg border-[1px] border-black inputTodo ' onChange={handleOnTask} value={name} />
                </div>
                <div>
                    <input type="date" className='py-3 px-4 rounded-lg border-[1px] border-black inputDate' onChange={handleOnChangeDate} value={date} />
                </div>
                <div>
                    <button className='bg-green-600 py-3 px-6 rounded-xl text-white hover:cursor-pointer font-semibold' onClick={addBtn} >Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo