import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Home from './newpages/Home';

import Signup from './newpages/Signup';
import Sout from './newpages/Sout';
import Profile from './newpages/Profile';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signout" element={<Sout />}/>

    </Routes>
    </BrowserRouter>
  )
}
