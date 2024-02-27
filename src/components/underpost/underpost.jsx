import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";




const Underpost = () => {
  const [like, setLike] = useState(2);
  function handleLike() {
    setLike(like + 1);
  }
  return (
    <div className='flex justify-between mx-3'>
      <div className='text-neutral-200 flex'onclick={handleLike}>
      <div className='text-neutral-200 text-3xl flex ' onclick={handleLike}>
        {/* <AiFillLike/> */}
        <FaHeart className='ml-{-3}' onClick={handleLike}/>
      </div>
      <div className="ml-2">
        <span> {like} likes</span>
      </div>
      </div>
      <div className="flex text-neutral-200 ">
        <FaComment/>
        <span className='ml-2'>2 comments</span>
      </div>
    </div>
  )
}

export default Underpost