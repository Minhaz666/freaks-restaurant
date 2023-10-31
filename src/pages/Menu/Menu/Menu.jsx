import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu]=useMenu()

    const dessert=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const offered=menu.filter(item=>item.category === 'offered')

    return (
        <div>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            
            {/* main cover */}
            <SectionTitles heading={"'Today's Offer'"} subheading={"don't miss"} ></SectionTitles>
            
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert */}
            <MenuCategory items={dessert} title={'Desserts'} img={dessertImg}></MenuCategory>
            
            {/* pizza */}
            <MenuCategory items={pizza} title={'Pizzas'} img={pizzaImg}></MenuCategory>
            
            {/* salad */}
            <MenuCategory items={salad} title={'Salads'} img={saladImg}></MenuCategory>
            
            {/* soup */}
            <MenuCategory items={soup} title={'Soups'} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;  