import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext';
import Card from '../components/shared/Card';


const Cart = () => {
    
  const Cartcont = useContext(CartContext);

    const myitems =JSON.parse(localStorage.getItem(''))
    console.log(myitems)


  return (
    <div className='w-full py-10 px-10   bg-slate-100  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 '>
      {Cartcont.cartitems.map((cartitem) =>{

       return  <Card key={cartitem.id}>
       <div>
           <img src={cartitem.image} alt="" className='h-[450px] w-full p-2 '/>
       </div>
       <div className='p-2 px-3 flex justify-between'>
           {cartitem.item}
       </div>
   </Card>
      })}
    </div>
  )
}

export default Cart