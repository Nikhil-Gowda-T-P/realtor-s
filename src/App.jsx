import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Home from './newpages/Home';

import Signup from './newpages/Signup';
import Sout from './newpages/Sout';
import Profile from './newpages/Profile';
import Header from '../components/Header';
import Signin from './newpages/Signin';
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path='/sign-in' element={<Signin />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signout" element={<Sout />}/>

    </Routes>
    </BrowserRouter>
   
  )
}
