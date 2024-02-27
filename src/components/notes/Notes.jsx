import React from 'react'
import "./notes.css"

const Notes = () => {
  return (
    <div className='h-full w-96 flex-4 fixed right-0'>
        <div className='heading h-15 flex justify-center'> 
            <span className='text-yellow-50 m-3 font-extrabold text-xl'>Remenber Me!!</span>
        </div>
        <div>
            <textarea className='p-3 border-none outline-none  h-screen w-full input text-gray-100 font-bold'></textarea>
        </div>
    </div>
  )
}

export default Notes