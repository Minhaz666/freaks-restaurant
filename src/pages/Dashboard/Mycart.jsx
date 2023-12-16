import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';

const Mycart = () => {

    const [, cart, refetch] = useCart()
    // console.log(cart)
    const totalPrice = cart.reduce((sum, item, Index) => {
        return sum + item.price;
    }, 0)

    const handleDelete = (singlecart) => {
        console.log(singlecart)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                 fetch(`http://localhost:5000/carts?id=${singlecart._id}`,{
                    method:"DELETE"
                 })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })

                
            }
        });


    }

    return (
        <div className='mt-5 w-full'>
            <div className='flex justify-between m-4'>
                <h1 className='text-2xl mr-5'>Total orders : {cart.length}</h1>
                <h1 className='text-2xl mr-5'>Total price : ${totalPrice}</h1>
                <button className={`btn bg-orange-300 text-black mb-1 p-4 `}>pay</button>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#6fbcc5] text-black'>
                                <th>#</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((singlecart, Index) => {
                                    return (

                                        <tr key={singlecart._id}>
                                            <td>
                                                {Index + 1}
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={singlecart.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{singlecart.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=' mr-5' >
                                                ${singlecart.price}
                                            </td>
                                            <td><button onClick={() => handleDelete(singlecart)} className='btn bg-red-900 text-white text-lg'><FaRegTrashCan /></button></td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Mycart;