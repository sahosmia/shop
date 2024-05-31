import useCarts from './useCarts';
import useAuth from './useAuth';

const useUserCarts = () => {
    const carts = useCarts();
      const auth = useAuth();
   
      if (auth.user !== null) {
        const userCarts = (carts.filter((item) => item.userId === auth?.user?.id));
        return userCarts;
      }
   
  return;
}

export default useUserCarts