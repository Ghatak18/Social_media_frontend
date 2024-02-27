import React from 'react'
import ankitapic from "../../assets/person/ankitapic.png"
import fizapic from "../../assets/person/fizapic.png"
import mayankpic from "../../assets/person/mayankpic.png"
import tusharpic from "../../assets/person/tusharpic.png"
import { FaSearch } from "react-icons/fa";
import Friendson from '../friendson/friendson';
import "./rightbar.css"



const Rightbar = () => {
  return (
    <div className='rightbar bg-neutral-800 '>
        <div className='flex justify-between'>
            <span className='ml-4 my-4'>Friend Requests</span>
            <span className='mr-4 my-4 '>See All</span>
        </div>
        <div className='my-4 mx-2 bg-neutral-700 hover:bg-neutral-900 rounded-md p-2'>
            <div className=' flex'>
                <img className="rounded-full h-16 w-16  mb-1"src={ankitapic}/>
                <div className='ml-4 flex flex-col '>
                    <span className='font-bold text-xl'> Ankita Gorai</span>
                    <span className='text-sm'>1 mutual friend</span>
                </div>
                <div className='flex justify-center ml-14'>
                <span className='text-xs'>3d</span>
                </div>
            </div>
            <div className='flex justify-around mt-2'>
                <button className='bg-gray-900 hover:bg-gray-950 outline-none border-none'>Accept</button>
                <button className='bg-gray-900 hover:bg-gray-950 outline-none border-none'>Delete</button>
            </div>
        </div>
        <hr></hr>
        <div>
        <div className='flex justify-between'>
            <span className='ml-4 my-4'>Friends Online</span>
            <FaSearch className='mr-4 my-4'/>
        </div>
        <div>
            <Friendson img={fizapic} name = "Fiza Yasmin" />
           
            <Friendson img={mayankpic} name = "Mayank mallick" />
           
            <Friendson img={tusharpic} name = "Tushar Kanti Das" />
        </div>

        </div>
    </div>
  )
}

export default Rightbar