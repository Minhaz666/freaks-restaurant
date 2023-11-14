import React from 'react';
import MenueItem from '../../Shared/MenueIteam/MenueItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,img,title}) => {
    return (
       <div>
        {title &&  <Cover img={img} title={title} ></Cover>}
        <div className='grid md:grid-cols-2 gap-10 mt-20'>
        {
            items.map(item=><MenueItem key={item._id} item={item}></MenueItem>)
        }
    </div>
    <Link className='flex justify-center btn btn-outline btn-success border-0 border-b-4 mb-20 mt-6' to={`/order/${title}`}>Order your favourite food</Link>
       </div>
    );
};

export default MenuCategory;