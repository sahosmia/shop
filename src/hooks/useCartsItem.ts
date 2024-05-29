import useAuth from './useAuth';
import useCarts from './useCarts';

const useCartsItem = (productId:number) => {
    const auth = useAuth();
    const carts = useCarts();

    const cartItem = null;
    if(auth.user !== null ){
      const cartItem = carts.find((item) => item.productId == productId && item.userId === auth?.user?.id)
      return cartItem
    }

    return  cartItem


  
}

export default useCartsItem