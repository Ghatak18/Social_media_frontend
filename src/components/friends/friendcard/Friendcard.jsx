import React from 'react'

const Friendcard = (props) => {
 const{pic,name,upbut, downbut} = props
    return (
    <div className='flex flex-col p-2 gap-1 h-84 rounded-lg bg-[url("https://gooloc.com/wp-content/uploads/2015/10/b2my2wszwqv.jpg")]' >
    <img className=' h-44 w-44 rounded-lg' src={pic}/>
    <span className='text-neutral-200 text-center text-lg font-semibold'>{name}</span>
    <button className='bg-neutral-600 hover:bg-neutral-800 text-neutral-200 border-none outline-none h-9'>{upbut}</button>
    <button className='bg-neutral-600 hover:bg-neutral-800 text-neutral-200 border-none outline-none h-9'>{downbut}</button>
</div>
  )
}

export default Friendcard