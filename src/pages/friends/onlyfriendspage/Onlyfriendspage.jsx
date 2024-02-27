import React from 'react'
import Friendbar from '../../../components/friends/Friendbar'
import Topbar from '../../../components/topbar/Topbar'
import tusharpic from "../../../assets/person/tusharpic.png"
import fizapic from "../../../assets/person/fizapic.png"
import mayankpic from "../../../assets/person/mayankpic.png"
import Onlyfriendstruct from '../../../components/friends/onlyfriendstruct/Onlyfriendstruct'
const Onlyfriendspage = () => {
  return (
    <div className='h-dvh bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]'>
    <Topbar/>
    <div>
    <Friendbar/>
    
    <Onlyfriendstruct/>
    
    </div>
    
    </div>
  )
}

export default Onlyfriendspage