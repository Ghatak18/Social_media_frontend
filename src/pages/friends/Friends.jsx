import React from 'react'
import Topbar from "../../components/topbar/Topbar.jsx"
import Friendbar from '../../components/friends/Friendbar.jsx'
import Requeststruct from '../../components/friends/requrststruct/Requeststruct.jsx'
import Onlyfriendstruct from '../../components/friends/onlyfriendstruct/Onlyfriendstruct.jsx'
import Suggestionstruct from '../../components/friends/suggestionsstruct/Suggestionstruct.jsx'
const Friends = () => {
  return (
    <div className='h-dvh bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]
  '>
      <Topbar/>
      <div classname="flex">
      <Friendbar/>
      <div>
          <Requeststruct/>
          <hr></hr>
          <Onlyfriendstruct/>
          <hr></hr>
          <Suggestionstruct/>
      </div>

      </div>
      
    </div>
  )
}

export default Friends