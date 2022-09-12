import React from 'react'
import Card from '../components/shared/Card'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';

const Arrivals = () => {

    // const [liked, setLiked] = useState(false);
    // const selectFavorite= (e)=>{
    //         e.preventDefault();
    //         setLiked(!liked)
    // }
    const newarrivals = [
        {id:1,item: "Calvin Klein Jumpers", price:"50", image:"https://imgs.search.brave.com/VbMSmL7WPdioN0vUBLak0bI1u-jhPanjJjKJSQovFyk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5tZW5uYWNlLmNv/bS9zL21lbm5hY2Uv/TVc0MDkwMzNfc2V0/LzMvb3JhbmdlLWNy/ZXctbmVjay1qdW1w/ZXIuanBnPyRwcm9k/dWN0LXBhZ2VfX3pv/b20tLTJ4JA", subImages:{img1:"https://images.vestiairecollective.com/cdn-cgi/image/w=500,h=500,q=80,f=auto,https://images.vestiairecollective.com/cdn-cgi/image//produit/blue-cotton-elasthane-balmain-jeans-10012429-2_1.jpg",img2:"https://images.vestiairecollective.com/cdn-cgi/image/w=500,h=500,q=80,f=auto,https://images.vestiairecollective.com/cdn-cgi/image//produit/blue-cotton-elasthane-balmain-jeans-10012429-2_1.jpg" } },
        {id:2, item: "Balmain Jeans (Ripped Edition Size 8) ", price:"100", image:"https://images.vestiairecollective.com/cdn-cgi/image/w=500,h=500,q=80,f=auto,https://images.vestiairecollective.com/cdn-cgi/image//produit/blue-cotton-elasthane-balmain-jeans-10012429-1_1.jpg"},
        {id:3, item: "Old Navy Blazer", price:"150", image:"https://n.nordstrommedia.com/id/sr3/55fcd13a-2a10-4928-9285-47716bad2788.jpeg?h=365&w=240&dpr=2",  },
        {id:4, item: "Nike Joggers", price:"50", image:"https://www.sportsdirect.com/images/products/48100003_l.jpg"},
        {id:5, item: "Victoria Secret Bikini",price:"40", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg",  },
        {id:6, item: "Dashiki Blouse", price:"50", image:"https://i.pinimg.com/originals/28/14/53/28145316d4f875b2b0820075f30fc601.jpg", },
        {id:7, item: "Adidas Joggers-Baggy", price:"50", image:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ef52406a6a34a3881d1ae4a013d0f90_9366/adicolor-3-stripes-cargo-tracksuit-bottoms.jpg" },
        {id:8, item: "Victoria Secret Bikini", price:"50", image:"https://m.media-amazon.com/images/I/71TK0bfRXkL._MCnd_AC_UL320_.jpg",  },
        {id:9, item: "Summer Joggers", price:"50", image:"https://i.pinimg.com/736x/96/99/d9/9699d9f7d73cbe67125df4653f92430d.jpg"},
        {id:10, item: "Victoria Secret Bikini", price:"50", image:"http://dress-trends.com/wp-content/uploads/2016/01/Victorias-Secret-New-swimwear-collection-Spring-Summer-2016-29.jpg",  },

    ]
  return (
    <div className='bg-slate-100'>
                <div className='w-full h-[200px] md:h-[500px] bg-slate-100 mb-[100px] px-10 pt-5 relative'>
                    <Slider/>
                </div>
                <div className='mt-[60px] ml-10'>
                    <h1 className='text-2xl font-500'>New Arrivals</h1>
                </div>
                <div className='w-full py-10 px-10   bg-slate-100  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 '>
                    {newarrivals.map((arrivals) =>{
                        return(
                            <Link to={'product'} state={arrivals}>
                                <Card key={arrivals.id}>
                                    <div>
                                        <img src={arrivals.image} alt="" className='h-[300px] md:h-[350px] w-full p-2 pb-4 '/>
                                    </div>
                                    <div className='p-2 px-3 flex justify-between pr-[20px] '>
                                       <p className='text-[15px] '> {arrivals.item}</p>
                                       <p className='text-[20px] font-semi-bold'>${arrivals.price} </p>
                                    </div>
                                </Card>
                            </Link>
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
                navigation={false} 
                modules={[Navigation,Pagination,Autoplay]}
                loop={true}
                autoplay={{delay: 6000, disableOnInteraction:false}}
                pagination={{clickable: false}}>
                <SwiperSlide className=' h-[200px] md:h-[500px] w-full bg-slate-100 grid grid-cols-3 lg:flex justify-between'>
                    <img className=' h-[200px] md:h-[500px]' src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80://assets.weforum.org/article/image/YlqprZMVrDcJUXbdjc5rAP6uqoO_YT1xZNby3HjH_KM.jpg" alt="" />
                    <img className=' h-[200px] md:h-[500px]' src="http://graphics8.nytimes.com/images/2013/12/12/t-magazine/12mens-rider/12mens-rider-custom1.jpg" alt="" />
                    <img className=' h-[200px] md:h-[500px]' src="https://images.squarespace-cdn.com/content/v1/5642c313e4b0cca19ea72e2e/1595864773515-Z2VFCJ4R4ASGQ097TRFI/HUNTERARTHUR_ASHLEYKARAH-11.jpg" alt="" />

                </SwiperSlide>

                <SwiperSlide className=' h-[200px] md:h-[500px] w-full bg-slate-100 grid grid-cols-3 lg:flex justify-between'>
                    <img className=' h-[200px] md:h-[500px]' src="https://mediaslide-us.storage.googleapis.com/spot6/pictures/1083/7145/large-1577975892-34e874e46697ec182330616fa2054430.jpg" alt="" />
                    <img className=' h-[200px] md:h-[500px]' src="https://blog.pixlr.com/wp-content/uploads/2021/06/79027683_l.jpg" alt="" />
                    <img className='  h-[200px] md:h-[500px]' src="https://sagaboi.com/wp-content/uploads/2018/02/Adonis-Bosso-Top-Black-Male-Model-Sagaboi-1.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-[200px] md:h-[500px] w-full bg-slate-100 grid grid-cols-3 lg:flex justify-between'>
                    <img className=' h-[200px] md:h-[500px]' src="https://static01.nyt.com/images/2021/09/07/t-magazine/07tmag-nichanian-slide-EPG0/07tmag-nichanian-slide-EPG0-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
                    <img className=' h-[200px] md:h-[500px]' src="https://images.squarespace-cdn.com/content/v1/50082875e4b07064ecec86a3/1658847832717-UJFYK09N85M72BM1C050/NI1C8147-2.jpg" alt="" />
                    <img className=' h-[200px] md:h-[500px]' src="https://static01.nyt.com/images/2021/09/07/t-magazine/07tmag-nichanian-slide-FW0K/07tmag-nichanian-slide-FW0K-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );

}