import React from 'react'
import Post from "../../feed/post/Post"
import myimg2 from "../../../assets/post/myimg2.jpg"
import profpic from "../../../assets/person/selfie1.jpg"

const Postcontainer = () => {
  return (
    <div>
        <Post profpic={profpic} name="Supratik Ghatak" caption="Bally Bridge" cont={myimg2}/>
        <Post profpic={profpic} name="Supratik Ghatak" caption="Bally Bridge" cont={myimg2}/>
        <Post profpic={profpic} name="Supratik Ghatak" caption="Bally Bridge" cont={myimg2}/>
        <Post profpic={profpic} name="Supratik Ghatak" caption="Bally Bridge" cont={myimg2}/>
    </div>
  )
}

export default Postcontainer