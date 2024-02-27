import React from 'react'
import Friendbar from '../../../components/friends/Friendbar'
import Topbar from '../../../components/topbar/Topbar'
import Requeststruct from '../../../components/friends/requrststruct/Requeststruct.jsx'
import ankitapic from "../../../assets/person/ankitapic.png"
const Friendrequestpage = () => {
  return (
    <div className='h-dvh bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]'>
    <Topbar/>
    <div className='flex justify-start'>
    <Friendbar/>
    
    <Requeststruct/>
    
    
    </div>
    
    </div>
  )
}

export default Friendrequestpage