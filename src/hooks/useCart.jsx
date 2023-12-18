import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const useCart = () => {

    const {user}=useContext(AuthContext)
    const token=localStorage.getItem('access-token')

    const { isPending, isError, data: cart=[] , error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            // console.log(data)
            return data.json()
          },
      })

      return [error, cart,refetch]
    

};

export default useCart;