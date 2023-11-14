import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    console.log(reviews)

    return (
        <section className='my-20'>
            <SectionTitles subheading="What our client say" heading="Testimonials">

            </SectionTitles>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {reviews.map(review => {
                    return (
                        <SwiperSlide key={review._id}>
                            <div className='flex flex-col items-center  m-24'>
                               <p> <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                /></p>
                                <p>{review.details}</p>
                                <h3 className='text-2xl text-orange-400 text-center'>{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    )

                })}

            </Swiper>

        </section>
    );
};

export default Testimonials;