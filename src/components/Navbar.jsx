import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [count,setCount] = useState(0)
    const handleClick =() => setNav(!nav)
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

             <li className='px-3'>
                <ShoppingBagOutlinedIcon className='absolute'/>
                <p className='relative ml-4 my-2 bg-black text-slate-50 px-2 rounded-2xl'>2</p>
             </li>

         </ul>
        

                {/*Haamburger*/}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer flex mt-6'>
             {!nav ? <FaBars className='mr-5 mt-1'/> : <FaTimes className='mr-5 mt-1'/>}
             <div className='px-3'>
                <ShoppingBagOutlinedIcon className='absolute'/>
                <p className={count !== 0 ? 'relative ml-4 my-2 bg-black text-[15px] text-slate-50 px-2 rounded-2xl' : 'hidden'}>{count}</p>            
            </div>
        </div>

        {/**Mobile Menu */}
        <ul className={!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-slate-200  flex flex-col justify-center items-center'}>
            <Link to={'/'} onClick={nav}>
            <li className='py-6 text-4xl'>New Arrivals</li></Link>
            <Link to={'men'} onClick={nav}>
            <li className='py-6 text-4xl'>Men</li></Link>
            <Link to={'women'} onClick={nav}>
            <li className='py-6 text-4xl'>Women</li></Link>
            <Link to={'children'} onClick={nav}>
            <li className='py-6 text-4xl'>Children</li></Link>
        </ul>
     

    </div>
  )
}

export default Navbar