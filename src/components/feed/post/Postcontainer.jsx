import React from 'react'
// import mypic from "../../../assets/person/selfie1.jpg"
import mayankpost from "../../../assets/post/mayankpost1.jpg"
import mayankpic from"../../../assets/person/mayankpic.png"
import tusharpost from "../../../assets/post/tusharpost.jpg"
import tusharpic from "../../../assets/person/tusharpic.png"
import fizapic from "../../../assets/person/fizapic.png"
import fizapost from "../../../assets/post/fizapost.jpg"
import mypost from "../../../assets/person/selfie1.jpg"
import Post from './Post'


const Postcontainer = () => {
  return (
    <div className='flex justify-center w-full  grow '>
        <div className='flex flex-col w-full overflow-x-hidden pl-20'>
        <Post profpic={mypost} name="Supratik Ghatak" caption="This is dope" cont={mypost}/>
            <Post profpic={fizapic} name="Fiza Yasmin" caption="wowww" cont={fizapost}/>
            <Post profpic={tusharpic} name="Tushar Kanti Das" caption="Beautiful Sunset" cont={tusharpost}/>
            <Post profpic={mayankpic} name="Mayank Mallick" caption="Nice yoo" cont={mayankpost}/>
            
        </div>
    </div>
  )
}

export default Postcontainer