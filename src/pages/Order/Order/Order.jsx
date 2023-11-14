import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTabWise/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams()
    const initialIndex = categories.indexOf(category)


    const [menu]=useMenu()

    const dessert=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const offered=menu.filter(item=>item.category === 'offered')
    const drinks=menu.filter(item=>item.category === 'drinks')

    const [tabIndex,setTabIndex]=useState(initialIndex)
    return (
        <div>
            <Cover img={orderCover} title={"Order Food"}></Cover>

           <div className='flex justify-center my-3'>
           <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className=' space-x-7 text-2xl text-amber-200'>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                 <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                  <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
           </div>

        </div>
    );
};

export default Order;