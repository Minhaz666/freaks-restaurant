import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu,setMenu]=useState([]);
    const [loading,useLoading]=useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/menu`)
        .then(res=>res.json())
        .then(data=>{
           setMenu(data);
           useLoading(false)
        })
    },[])
    return [menu,loading];
};

export default useMenu;