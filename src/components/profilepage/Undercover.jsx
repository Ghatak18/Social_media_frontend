import React from 'react'
import Postcontainer from "./postcontainer/Postcontainer"
import "./undercover.css"
const Undercover = () => {
  return (
    <div className='flex items-start justify-center undercover mt-8  '>
        
            <div className='mt-3 text-neutral-200 sticky top-0 bg-[url("https://gooloc.com/wp-content/uploads/2015/10/b2my2wszwqv.jpg")] h-[450px] w-80 rounded-lg '>
                <div className='flex rounded-lg justify-start text-lg font-semibold bg-neutral-900'>
                    <span className='mx-4 my-2'>Bio</span>
                </div>
                <p className='p-3'>
                    HI This is Supratik Ghatak..
                    a simple app developper

                </p>
            </div>
        
        <div>
        <Postcontainer/>
        </div>
    </div>
  )
}

export default Undercover