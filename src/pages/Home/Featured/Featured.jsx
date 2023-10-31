import React from 'react';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed mb-16'>
            <SectionTitles subheading="check it out" heading="Featured Item"></SectionTitles>
            <div className='md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-70 '>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10 text-white'>
                    <p>Aug 20,2029</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sit voluptatum enim commodi tempore repudiandae nemo et id molestiae magnam repellendus, maiores aut fugit sequi aspernatur. Delectus dignissimos quibusdam id consectetur, vel excepturi error dicta laborum officiis amet accusamus dolorum architecto ipsa unde eius magni. Quos adipisci cupiditate dolore harum!</p>
                    <button className='btn btn-outline btn-success border-0 border-b-4'>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;