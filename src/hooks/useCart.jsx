import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {

    const {user}=useContext(AuthContext)

    const { isPending,isError, data:cart=[], error, } = useQuery ({
        queryKey: ['carts',user?.email],
        queryFn:  async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json() 
          },
      })

      return [cart,isPending]
};

export default useCart;