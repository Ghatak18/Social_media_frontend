import React from 'react'
import ankitapic from "../../../assets/person/ankitapic.png"
import Friendcard from '../friendcard/Friendcard'
import tusharpic from "../../../assets/person/tusharpic.png"
import fizapic from "../../../assets/person/fizapic.png"
import mayankpic from "../../../assets/person/mayankpic.png"
const Onlyfriendstruct = (props) => {
    const {pic} = props
  return (
    <div className='ml-[320px] p-5 pt-2 bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]' >
       <span className='text-neutral-300 text-2xl font-extrabold'>Friends</span>
    <div className='p-2 grid grid-cols-6 gap-2  '>
        <Friendcard pic={tusharpic} name="Tushar Kanti Das" upbut="Unfriend" downbut="Message"/>
        <Friendcard pic={fizapic} name="Fiza Yasmin" upbut="Unfriend" downbut="Message"/>
        <Friendcard pic={mayankpic} name="Mayank Mallick" upbut="Unfriend" downbut="Message"/>
    </div>
    </div>
  )
}

export default Onlyfriendstruct