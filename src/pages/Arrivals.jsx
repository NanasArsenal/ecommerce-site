import React from 'react'
import Card from '../components/shared/Card'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const Arrivals = () => {

    const [liked, setLiked] = useState(false);
    const newarrivals = [
        {id:1, item: "Calvin Klein Jumpers", image:"https://imgs.search.brave.com/VbMSmL7WPdioN0vUBLak0bI1u-jhPanjJjKJSQovFyk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5tZW5uYWNlLmNv/bS9zL21lbm5hY2Uv/TVc0MDkwMzNfc2V0/LzMvb3JhbmdlLWNy/ZXctbmVjay1qdW1w/ZXIuanBnPyRwcm9k/dWN0LXBhZ2VfX3pv/b20tLTJ4JA"},
        {id:2, item: "Balmain Jeans", image:"https://cdna.lystit.com/photos/balmain/585ab0ea/balmain-Blue-Slim-cut-Ripped-Blue-Cotton-Jeans.jpeg"},
        {id:3, item: "Old Navy Blazer", image:"https://cdna.lystit.com/photos/oldnavy/e1fa4122/old-navy-Houndstooth-Quilted-Sweater-fleece-Bomber-Jacket.jpeg"},
        {id:4, item: "Summer Joggers", image:"https://i.pinimg.com/736x/96/99/d9/9699d9f7d73cbe67125df4653f92430d.jpg"},
        {id:5, item: "Victoria Secret Bikini", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg"},
        {id:6, item: "Dashiki Blouse", image:"https://i.pinimg.com/originals/28/14/53/28145316d4f875b2b0820075f30fc601.jpg"},
        {id:7, item: "Summer Joggers", image:"https://i.pinimg.com/736x/96/99/d9/9699d9f7d73cbe67125df4653f92430d.jpg"},
        {id:8, item: "Victoria Secret Bikini", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg"},
        {id:9, item: "Summer Joggers", image:"https://i.pinimg.com/736x/96/99/d9/9699d9f7d73cbe67125df4653f92430d.jpg"},
        {id:10, item: "Victoria Secret Bikini", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg"},

    ]
  return (
    <div className='bg-slate-100'>
                <div className='w-full h-[500px] bg-slate-100 mb-[150px] px-10 pt-5'>
                    <Slider/>
                </div>
                <div className='mt-[200px] ml-10'>
                    <h1 className='text-4xl font-bold'>New Arrivals</h1>
                </div>
                <div className='w-full py-10 px-10   bg-slate-100  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 '>
                    {newarrivals.map((arrivals) =>{
                        return(
                            <Card key={arrivals.id} >
                                <div>
                                    <img src={arrivals.image} alt="" className='h-[450px] w-full p-2 '/>
                                </div>
                                <div className='p-2 px-3 flex justify-between'>
                                    {arrivals.item}
                                    <FavoriteBorderOutlinedIcon/>
                                </div>
                            </Card>
                        )
                    })}      
                </div>
    </div>
  )
}

export default Arrivals




const Slider = ()=>{
    return(
        <>
            <Swiper 
                navigation={true} 
                modules={[Navigation,Pagination,Autoplay]}
                loop={true}
                autoplay={{delay: 4000, disableOnInteraction:false}}
                pagination={{clickable: false}}>
                <SwiperSlide className='h-[650px] w-full bg-slate-100 flex justify-between'>
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-[650px] w-full bg-slate-100 flex justify-between'>
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-[650px] w-full bg-slate-100 flex justify-between'>
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-[650px] w-full bg-slate-100 flex justify-between'>
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-[650px] w-full bg-slate-100 flex justify-between'>
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-[650px] w-full bg-slate-100 flex justify-between'>
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                    <img className='h-[650px]' src="https://4.bp.blogspot.com/-8PHmhS2YqG4/UN2briGB3nI/AAAAAAAAAEU/26wv0R1GgBQ/s1600/african-clothing.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );

}