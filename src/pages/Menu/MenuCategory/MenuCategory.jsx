import React from 'react';
import MenueItem from '../../Shared/MenueIteam/MenueItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items,img,title}) => {
    return (
       <div>
        {title &&  <Cover img={img} title={title} ></Cover>}
        <div className='grid md:grid-cols-2 gap-10 my-20'>
        {
            items.map(item=><MenueItem key={item._id} item={item}></MenueItem>)
        }
    </div>
       </div>
    );
};

export default MenuCategory;