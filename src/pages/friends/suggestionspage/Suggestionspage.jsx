import React from 'react'
import Friendbar from '../../../components/friends/Friendbar'
import Topbar from '../../../components/topbar/Topbar'
import Suggestionstruct from '../../../components/friends/suggestionsstruct/Suggestionstruct'

const Suggestionspage = () => {
  return (
    <div className='h-dvh bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]'>
    <Topbar/>
    <div>
    <Friendbar/>
        
    <Suggestionstruct />
    
    </div>
    </div>
    
    
  )
}

export default Suggestionspage