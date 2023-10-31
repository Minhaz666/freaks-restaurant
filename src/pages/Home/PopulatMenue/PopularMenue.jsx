import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import MenueItem from '../../Shared/MenueIteam/MenueItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenue = () => {

    // const [menue,setMenue]=useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //        const populatItems= data.filter(populatItem=>populatItem.category==='popular')
    //        setMenue(populatItems)
    //     })
    // },[])

    const [menu]=useMenu()

    const popular= menu.filter(item=>item.category==="popular")
    console.log(popular)

    return (
      <section className='mb-12'>
        <SectionTitles heading={"From Our Menue"} subheading={"popular Iteams"}>
        </SectionTitles>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                popular.map(item=><MenueItem key={item._id} item={item}></MenueItem>)
            }
        </div>
      </section>
    );
};

export default PopularMenue;