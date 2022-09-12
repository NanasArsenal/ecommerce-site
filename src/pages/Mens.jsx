import React,{useState} from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const Mens = () => {
  const [liked, setLiked] = useState(false);
  const selectFavorite= (e)=>{
          e.preventDefault();
          setLiked(!liked)
  }
  const mens = [
    {id:1, item: "Calvin Klein Jumpers", price:"50", image:"https://imgs.search.brave.com/VbMSmL7WPdioN0vUBLak0bI1u-jhPanjJjKJSQovFyk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5tZW5uYWNlLmNv/bS9zL21lbm5hY2Uv/TVc0MDkwMzNfc2V0/LzMvb3JhbmdlLWNy/ZXctbmVjay1qdW1w/ZXIuanBnPyRwcm9k/dWN0LXBhZ2VfX3pv/b20tLTJ4JA"},
    {id:2, item: "Balmain Jeans", price:"50", image:"https://cdna.lystit.com/photos/balmain/585ab0ea/balmain-Blue-Slim-cut-Ripped-Blue-Cotton-Jeans.jpeg"},
    {id:3, item: "Old Navy Blazer", price:"50", image:"https://cdna.lystit.com/photos/oldnavy/e1fa4122/old-navy-Houndstooth-Quilted-Sweater-fleece-Bomber-Jacket.jpeg"},
]
  return (
    <div className='bg-slate-50'>
      <div className='text-4xl pl-10'>
        <p>Mens</p>
      </div>
        <div className='w-full py-10 px-10   bg-slate-100  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 '>
                    {mens.map((men) =>{
                        return(
                            <Link to={'/product'} state={men}>
                                <Card key={men.id}>
                                    <div>
                                        <img src={men.image} alt="" className='h-[300px] md:h-[350px] w-full p-2 '/>
                                    </div>
                                    <div className='p-2 px-3 flex justify-between'>
                                        <p className='text-[15px] '>{men.item}</p>
                                        <p className='text-[15px] '>${men.price}</p>
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}      
                </div>
    </div>
  )
}

export default Mens