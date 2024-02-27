import React from 'react'
import fizapic from "../../assets/person/fizapic.png"
import { GiSpiderMask } from 'react-icons/gi'
import "./friendson.css"

const Friendson = (props) => {



  return (
    <div className='friendson flex align-middle my-4 hover:bg-neutral-900 rounded-md p-2'>
        <div className='flex'>
        <img className="ml-5 h-12 w-12 rounded-full" src={props.img}/>
        <span className="onlineindicator">00</span>
        </div>
        
        <span className='ml-5 flex items-center'>{props.name}</span>
    </div>
  )
}

export default Friendson