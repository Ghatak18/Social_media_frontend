import React from 'react'
// import mayankpost from "../../../assets/post/mayankpost.jpg"
// import tusharpost from "../../../assets/post/tusharpost.jpg"
// import tusharpic from "../../../assets/person/tusharpic.png"
import "./post.css"
import Underpost from '../../underpost/underpost';
const Post = (props) => {

    const{profpic, name, caption, cont} = props;

  return (
    <div className='flex flex-col justify-center m-4 w-[455px] rounded-xl post'>
        <div className='flex justify-center'>
            <div className='flex justify-start w-[460px] bg-neutral-900 pt-2'>
                <img className='img h-14 w-14 rounded-full my-1 mx-2' src={profpic}/>
                <div className='flex flex-col mx-3  w-full'>
                    <span className='font-bold text-white text-lg'>{name}</span>
                    <span className='text-yellow-100 text-xs mt-2'>{caption}</span>
                </div>
            </div>
        </div>
        <div className='flex justify-center p-2 bg-gray-400'>
            <img className="max-h-[600px] rounded-md" src={cont}/>
        </div>
        <div className='bg-neutral-600 w-full h-16 align-middle justify-center flex flex-col'>
        <Underpost/>
        </div>
        
    </div>
  )
}

export default Post