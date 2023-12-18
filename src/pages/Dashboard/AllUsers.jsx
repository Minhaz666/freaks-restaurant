import React from 'react';
import {useQuery} from '@tanstack/react-query'
import { FaUserShield } from 'react-icons/fa6';
import Swal from 'sweetalert2';
  

const AllUsers = () => {
    
    const { data:users=[],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            
            const res=await fetch(`http://localhost:5000/users`)
            const users= await res.json();
           return users;
        },
      })

      const handleMakeAdmin=(user)=>{
        // console.log(user)
        fetch(`http://localhost:5000/users/admin?user=${user._id}`,{
          method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount)
          {
            refetch()

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            })
          }
          
        })
      }

    return (
        <div className='w-full'>
            {/* {users.length} */}

            <div className="overflow-x-auto ">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map((user,Index)=>{

           return <tr key={user._id}>
            <td>{Index+1}</td>
            <td>{user.className}</td>
            <td>{user.email}</td>
            <td>{user?.role==='admin'? 'admin':<>
            <button onClick={()=>handleMakeAdmin(user)} className='btn btn-ghost bg-orange-400 text-white'><FaUserShield></FaUserShield></button>
            </>}</td>
            <td>Blue</td>
          </tr>
        })
     }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUsers;