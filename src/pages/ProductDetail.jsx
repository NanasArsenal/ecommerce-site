import { Card } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ProductDetail = () => {
    const location = useLocation();
    const data = location.state;
    
    const Cartcont = useContext(CartContext);

    //destructure
    const cartitems = Cartcont.cartitems;
    


    // const AddProduct=(e)=>{
    //     e.preventDefault();
    //     Cartcont.setCartitems([data])
    //     console.log(Cartcont.cartitems)
        
    // }

    
  return (
    <Card className='text-4xl  mt-10'>
      <div className='flex'>
        <div className='h-full px-[300px] '>
            <img src={data.image} alt="" className='h-[400px] '/>
            <p>{data.item}</p>
        </div>
        <div className='details'>
            <div className='sizes flex w-[500px] justify-evenly'>
                <label htmlFor="xl">XL</label><input type="checkbox" name="xl" id="" />
                <label htmlFor="l">L</label><input type="checkbox" name="l" id="" />
                <label htmlFor="m">M</label><input type="checkbox" name="m" id="" />
                <label htmlFor="s">S</label><input type="checkbox" name="s" id="" />
            </div>

            <div>
                <button onClick={()=>Cartcont.setCartitems((oldArray) => oldArray.concat(data))}>
                    <div className='border border-1 border-slate-700 w-[400px] h-[70px] mt-10 text-lg flex justify-center pt-6'>
                        <p><span><ShoppingBagOutlined/></span> Add product to Cart</p>
                    </div>
                </button>
            </div>

        </div>
     </div>
    </Card>
  )
}

export default ProductDetail