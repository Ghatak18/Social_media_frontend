import React from 'react'
import mycoverpic from "../../assets/coverpic/coverpic.jpg"
import myprofilepic from "../../assets/person/selfie1.jpg"
import "./covers.css"
import Undercover from './Undercover'

const Covers = () => {
  return (
    <div className='flex flex-col w-screen'>
    <div className="covers w-screen h-[550px] ">
    <div className='flex justify-center'>
    <div className='flex flex-col'>
        <img className="w-[1000px] max-h-[400px] rounded-md object-cover" src={mycoverpic}/>
        <div className='left-[150px]'>
        <img className=" profimg left-[300px] rounded-full h-52 w-52 absolute top-[380px] " src={myprofilepic}/>
        </div>
        <div className='text-neutral-200 flex justify-end'>
          <div className='w-[730px] flex justify-between'>
            <div className='flex flex-col text-center mt-5'>
              <span className='text-neutral-200 text-5xl font-semiboldbold'>Supratik Ghatak </span>
              <span className='mt-3 text-lg'>5 friends</span>
            </div>
            <button className='h-14 w-36 mt-7 mr-1 bg-neutral-800 hover:bg-neutral-950 border-none outline-none'>Edit Profile</button>
          </div>
        </div>
        
      </div>
      
    </div>
    </div>
    <div className=''>
        <Undercover/>
    </div>
    </div>
  )
}

export default Covers