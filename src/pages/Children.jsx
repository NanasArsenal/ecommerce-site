import React,{useState} from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const Children = () => {
  // const [liked, setLiked] = useState(false);
  // const selectFavorite= (e)=>{
  //         e.preventDefault();
  //         setLiked(!liked)
  // }
  const women = [
    {id:5, item: "Victoria Secret Bikini", price:"50", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg"},
    {id:6, item: "Dashiki Blouse", price:"80", image:"https://i.pinimg.com/originals/28/14/53/28145316d4f875b2b0820075f30fc601.jpg"},
    {id:7, item: "Summer Joggers", price:"70", image:"https://i.pinimg.com/736x/96/99/d9/9699d9f7d73cbe67125df4653f92430d.jpg"},
    {id:8, item: "Victoria Secret Bikini", price:"90", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg"},
    {id:9, item: "Summer Joggers", price:"30", image:"https://i.pinimg.com/736x/96/99/d9/9699d9f7d73cbe67125df4653f92430d.jpg"},
    {id:10, item: "Victoria Secret Bikini", price:"500", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg"},

]
  return (
    <div className='bg-slate-50'>
      <div className='text-4xl pl-10'>
        <p>Children</p>
      </div>
        <div className='w-full py-10 px-10   bg-slate-100  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 '>
                    {women.map((woman) =>{
                        return(
                            <Link to={'/product'} state={woman}>
                                <Card key={woman.id}>
                                    <div>
                                        <img src={woman.image} alt="" className='md:h-[350px] w-full p-2 '/>
                                    </div>
                                    <div className='p-2 px-3 flex justify-between'>
                                         <p className='text-[15px] '>{woman.item}</p>
                                         <p className='text-[15px] '>${woman.price}</p>
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}      
                </div>
    </div>
  )
}

export default Children