import React,{useState,useContext} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick =() => setNav(!nav)

    const Cartcont = useContext(CartContext);
    console.log(Cartcont.cartitems.length)
    console.log(Cartcont.cartitems)

 

  return (
        
            <div className=' w-full h-[80px] sticky top-0 ... flex justify-between items-center px-4 bg-slate-50'>
                <div>
                    <h1 className='text-4xl' >Enkay Shop</h1>
                </div>

                <ul className='hidden md:flex'>
                    <Link to="/">
                        <li className='px-3'>
                            New Arrivals
                        </li>
                    </Link>

                    <Link to="men">
                        <li className='px-3'>
                            Men
                        </li>
                    </Link>


                    <Link to={"women"}>
                    <li className='px-3'>
                        Women
                    </li>
                    </Link>

                    <Link to="children">
                        <li className='px-3'>
                            Children
                        </li>
                    </Link>
                    <Link to={'cart'}>
                        <li className='px-3'>
                            <ShoppingBagOutlinedIcon className='absolute'/>
                            <p className='relative ml-4 my-2 bg-black text-slate-50 px-2 rounded-2xl'>{Cartcont.cartitems.length}</p>
                        </li>
                    </Link>

                </ul>
                

                        {/*Haamburger*/}
                <div className='md:hidden z-10 cursor-pointer flex mt-6'>
                    <div onClick={handleClick} >
                        {!nav ? <FaBars className='mr-5 mt-1'/> : <FaTimes className='mr-5 mt-1'/>}
                    </div>
                    <div className='px-3'>
                        <Link to={'cart'}><ShoppingBagOutlinedIcon className='absolute'/></Link>

                            <p className={Cartcont.cartitems.length !== 0 ? 'relative ml-4 my-2 bg-black text-[15px] text-slate-50 px-2 rounded-2xl' : 'hidden'}>{Cartcont.cartitems.length}</p>            
                    </div>
                </div>

                {/**Mobile Menu */}
                <ul className={!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-slate-200  flex flex-col justify-center items-center'}>
                    <Link to={'/'}>
                    <li className='py-6 text-4xl'>New Arrivals</li></Link>
                    <Link to={'men'}>
                    <li className='py-6 text-4xl' >Men</li></Link>
                    <Link to={'women'}>
                    <li className='py-6 text-4xl' >Women</li></Link>
                    <Link to={'children'} >
                    <li className='py-6 text-4xl' >Children</li></Link>
                </ul>
            

            </div>
   
  )
}

export default Navbar