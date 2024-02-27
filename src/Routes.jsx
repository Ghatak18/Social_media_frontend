import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './pages/home/App'
import Profile from './pages/profile/profile'
import Friends from './pages/friends/Friends'
import Friendrequestpage from './pages/friends/friendrequestpage/Friendrequestpage'
import Suggestionspage from './pages/friends/suggestionspage/Suggestionspage'
import Onlyfriendspage from './pages/friends/onlyfriendspage/Onlyfriendspage'
const Routess = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/friends" element={<Friends/>}></Route>
        <Route path="/friends/requests" element={<Friendrequestpage/>}/>
        <Route path="/friends/onlyfriends" element={<Onlyfriendspage/>}/>
        <Route path="/friends/Suggestions" element={<Suggestionspage/>}/>
    </Routes>
    </>
  )
}

export default Routess