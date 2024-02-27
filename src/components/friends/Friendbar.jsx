import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { FaGrinStars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./friendbar.css"
import { useNavigate } from 'react-router-dom';

const Friendbar = () => {

    const navigate = useNavigate();

    const handleAll = () =>{
        navigate("/friends")
    }
    const handleRequest = () =>{
        navigate("/friends/requests")
    }
    const handleAllfriend = () =>{
        navigate("/friends/onlyfriends")
    }

    const handleSuggestions = () =>{
        navigate("/friends/suggestions")
    }

  return (
    <div className='rightbar left-0 p-3 text-neutral-200 bg-neutral-800 flex flex-col'>
        <div className='h-16 flex flex-col justify-center hover:bg-neutral-900 rounded-lg'>
            <div className='flex' onClick={handleAll}>
            <FaUserFriends className='mt-1 ml-2 text-xl'/>
            <span className='text-xl font-semibold ml-4'>All</span>
            </div>
        </div>
        <div className='h-16 flex flex-col justify-center hover:bg-neutral-900 rounded-lg'>
        <div className='flex' onClick={handleRequest}>
            <MdOutlineSportsKabaddi className='mt-1 ml-2 text-xl'/>
            <span className='text-xl font-semibold ml-4'>Friend Requests</span>
        </div>
        </div>
        <div className='h-16 flex flex-col justify-center hover:bg-neutral-900 rounded-lg'>
        <div className='flex' onClick={handleAllfriend}>
            <FaHeart className='mt-1 ml-2 text-xl'/>
            <span className='text-xl font-semibold ml-4'>All Friends</span>
        </div>
        
        </div>
        <div className='h-16 flex flex-col justify-center hover:bg-neutral-900 rounded-lg'>
        <div className='flex' onClick={handleSuggestions}>
            
            <FaGrinStars className='mt-1 ml-2 text-xl'/>
            <span className='text-xl font-semibold ml-4'>Suggestions</span>
        </div>
        </div>
        
    </div>
  )
}

export default Friendbar