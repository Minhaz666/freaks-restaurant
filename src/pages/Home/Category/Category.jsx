import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';



const Category = () => {
    return (
       <>
     <section>
        <SectionTitles  heading={'Order Online'} subheading={'from 11.00am to 10.pm'}>

        </SectionTitles>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slider1}/>
            <h3 className='text-1xl uppercase text-center -mt-10  text-white'>salad </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2}/>
            <h3 className='text-1xl uppercase text-center -mt-10  text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3}/>
            <h3 className='text-1xl uppercase text-center -mt-10  text-white'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4}/>
            <h3 className='text-1xl uppercase text-center -mt-10  text-white'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5}/>
            <h3 className='text-1xl uppercase text-center -mt-10  text-white'>Salad</h3>
        </SwiperSlide>
  
       
      </Swiper>
     </section>
       </>
    );
};

export default Category;