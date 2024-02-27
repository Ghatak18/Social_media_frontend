import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { GiEagleHead } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "./topbar.css"
import { useNavigate } from 'react-router-dom';
// import myimg from "../././../assets/person/selfie1.JPG"
import myimg1 from "../../assets/person/selfie1.jpg"
const Topbar = () => {
  const navigate = useNavigate();
  const handleProf = () =>{
    navigate("/profile")
  }

  const handleHome = () =>{
    navigate("/")
  }

  const handleFriend = () =>{
    navigate("/friends")
  }
  return (
    <div className=' topbar sticky top-0 left-0
    w-screen h-16 text-yellow-50 flex justify-between'>
      <div className='flex justify-between '>
        <div className='m-4 mt-2 '>
          < GiEagleHead size={56} className='hover:text-gray-500' onClick={handleHome}/>
        </div>
        {/* <div className='m-4'>
          <span className='font-extrabold text-xl'>Eagle Eyes</span>
        </div> */}
        <div className='m-4 flex justify-center bg-slate-300 rounded-xl'>
          <FaSearch className='mt-2 mx-2 text-slate-950' size={15}/>
          <input className=" rounded-xl border-0 outline-0 bg-slate-300" placeholder='   Searh'></input>
        </div>
      </div> 
      <div className='flex'>
        <div className='m-4 mr-15 '>
          <FaHome size={36} className='hover:text-gray-500' onClick={handleHome}/>
        </div>
        <div className='m-4 mr-60'>
          <IoPeopleSharp size={36} className='hover:text-gray-500' onClick={handleFriend}/>
        </div>
      </div> 

      <div className='flex '>
        {/* <div className='m-4'>
          <LuMessagesSquare size={36} className='hover:text-gray-500'/>
        </div>
        <div className='m-4'>
          <IoIosNotifications size={36} className='hover:text-gray-500'/>
          <span className="topbarIconBadge">1</span>
        </div> */}
        <div className='m-4 mr-8'>
          <img className="rounded-full h-10 w-10" onClick={handleProf}  src={myimg1}/>
        </div>
      </div> 


    </div>
  )
}

export default Topbar