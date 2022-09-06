import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext';

const Cart = () => {
    
  const Cartcont = useContext(CartContext);


  return (
    <div>
      {Cartcont.cartitems.map((cartitem) =>{

       return <div>
          {cartitem.item}
        </div>
      })}
    </div>
  )
}

export default Cart