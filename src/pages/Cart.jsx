import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext';
import Card from '../components/shared/Card';


const Cart = () => {
    
  const Cartcont = useContext(CartContext);

    const myitems =JSON.parse(localStorage.getItem(''))
    console.log(myitems)

    const cartitems = Cartcont.cartitems;
   
//wrote this shit myself
   function removeItem(id){
       console.log(id)
       const newcartitems = cartitems.filter(cartitem => cartitem.id !== id)
       Cartcont.setCartitems(newcartitems)
   }


  return (
    <div className='flex flex-col'>
        <div className='w-full py-10 px-10   bg-slate-100  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 '>
          {Cartcont.cartitems.map((cartitem) =>{

          return  <Card key={cartitem.id} >
            <div className='text-right px-3 pt-2'>
              <button className='font-bold' onClick={()=> removeItem(cartitem.id)} >X</button>
            </div>
          <div>
              <img src={cartitem.image} alt="" className='h-[300px] md:h-[350px] w-full p-2 '/>
          </div>
          <div className='p-2 px-3 flex justify-between pr-[20px] '>
                  <p className='text-[15px] '> {cartitem.item}</p>
                  <p className='text-[20px] font-semi-bold'>{cartitem.price} </p>
          </div>
      </Card>
          })}
        </div>

       
        <button>
                <div className='border border-1 border-slate-700 w-[400px] h-[70px] mt-10 text-lg flex justify-center pt-6'>
                        <p> Checkout</p>
                    </div>
        </button>
    
    </div>
  )
}

export default Cart