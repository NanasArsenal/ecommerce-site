import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Arrivals from '../pages/Arrivals'
import Mens from '../pages/Mens'
import Women from '../pages/Women'
import Children from '../pages/Children'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index path='/' element={<Arrivals/>}/>
        <Route path='product' element={<ProductDetail/>}/>
        <Route path='men' element={<Mens/>}/>
        <Route path='Women' element={<Women/>}/>
        <Route path='children' element={<Children/>}/>
        <Route path='cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AppRoutes