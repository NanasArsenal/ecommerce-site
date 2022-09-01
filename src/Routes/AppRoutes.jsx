import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Arrivals from '../pages/Arrivals'
import Mens from '../pages/Mens'
import Women from '../pages/Women'
import Children from '../pages/Children'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index path='/' element={<Arrivals/>}/>
        <Route path='men' element={<Mens/>}/>
        <Route path='Women' element={<Women/>}/>
        <Route path='children' element={<Children/>}/>
    </Routes>
  )
}

export default AppRoutes