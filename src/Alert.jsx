import React from 'react'

function Alert({ alert }) {
    return (
        <div className='w-full h-20 flex justify-center items-center '  >
            <div className={`text-red-500 font-semibold lg:w-[25%] w-[90%] border-[1px] border-red-500 flex justify-center items-center h-10 bg-gray-100 rounded-sm shadow-lg ${alert}`} >
                <p>Please fill both todo and date to continue !</p>
            </div>
        </div>
    )
}

export default Alert