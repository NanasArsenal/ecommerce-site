import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext';
import Card from '../components/shared/Card';
import { InsertInvitation } from '@mui/icons-material';


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
   const array=[];

   for(let i =0; i<cartitems.length;i++){
      array.push(parseInt(cartitems[i].price));
       console.log(array)
   }
   

   //total price 
   function TotalPrice(array){
    let sum = 0; // initialize sum 
   
    // Iterate through all elements 
    // and add them to sum 
    for (let i = 0; i < array.length; i++) 
        sum += array[i]; 

    return sum; 
   }
 
  //total price calculation
  //  const Total = cartitems.map((cartitem)=>{
  //     let initialprice = 0;
  //     let pricesum;
  //     return   pricesum = initialprice + parseInt(cartitem.price);
  //  } )

  return (
    <div className='flex flex-col md:flex-row'>
        <div className='overflow-y-auto h-auto w-full py-10 px-10 mr-10 bg-slate-100  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 hidden md:grid'>
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


{/* check out list */}
       <div className=' shadow-xl h-full px-2 py-3 '>
          <div>
            {
              Cartcont.cartitems.map((cartitem) =>{
                return(
                  <Card>
                    <div>
                      <li>{cartitem.item} </li>
                    </div>
                  </Card>
                )
              })
            }
          </div>
          <div>
            <p>Total :$ {TotalPrice(array)} </p>
          </div>
          <button>
                  <div className='border sm:ml-10 md:ml-0 border-1 border-slate-700  w-[250px] md:w-[400px]  h-[70px] mt-10 text-lg flex justify-center align-middle pt-6'>
                          <p> Checkout</p>
                  </div>
          </button>
        </div> 
    
    </div>
  )
}

export default Cart