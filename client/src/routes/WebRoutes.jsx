import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Home } from '../pages'
import Login from '../pages/Login/Login'
import Signup from '../pages/SignUp/SignUp'

const WebRoutes = () => {
  return (
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/signup" element ={<Signup/>} />
            <Route path="/login" element ={<Login/>} />
        </Routes>
  )
}

export default WebRoutes