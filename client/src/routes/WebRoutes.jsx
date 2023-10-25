import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Home } from '../pages'

const WebRoutes = () => {
  return (
        <Routes>
            <Route path="/" element ={<Home/>} />
        </Routes>
  )
}

export default WebRoutes