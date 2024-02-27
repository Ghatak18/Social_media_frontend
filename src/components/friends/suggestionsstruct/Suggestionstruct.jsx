import React from 'react'
import Friendcard from '../friendcard/Friendcard'
import arneshpic from "../../../assets/person/arneshpic.png"

const Suggestionstruct = (props) => {
    const {pic} = props
  return (
    <div className='ml-[320px] p-5 pt-2 bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]' >
        <span className='text-neutral-300 text-2xl font-extrabold'>Suggestions</span>
    <div className='p-2 grid grid-cols-6 gap-2 bg-red-400 bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]'>
        <Friendcard pic={arneshpic} name="Arnesh Halder" upbut="Add Friend" downbut="Remove"/>
    </div>
    </div>
  )
}

export default Suggestionstruct