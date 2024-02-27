import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Covers from '../../components/profilepage/Covers'
import "./profile.css"
const Profile = () => {
  return (
    <div className='profile h-screen'>
      <Topbar/>
      <Covers/>
    </div>
  )
}

export default Profile