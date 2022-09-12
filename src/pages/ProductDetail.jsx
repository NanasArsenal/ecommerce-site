///create an array and push prduct prices to the array, then sum the member

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
    


    const AddProduct=(e)=>{
        e.preventDefault();
        Cartcont.setCartitems((oldArray) => oldArray.concat(data))        
    }


  return (
    <div className='w-full flex justify-center '>
        <Card className='text-4xl mt-10 px-5 lg:w-[1000px] '>
            <div className='grid grid-cols-1 md:grid-cols-2 py-[100px] justify-between '>

                <div className='h-full px-[10px]   '>
                    <img src={data.image} alt="" className='h-[400px] '/>
                </div>

                <div className='details '>
                    <p className='text-left'>{data.item}</p>
                    <p className='text-left mt-4'>($ {data.price})</p>

                    <div>
                        <button onClick={AddProduct}>
                            <div className='border border-1 border-slate-700 w-[350px] h-[70px] mt-10 text-lg flex justify-center pt-6'>
                                <p><span><ShoppingBagOutlined/></span> Add product to Cart</p>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </Card>
    </div>
  )
}

export default ProductDetail