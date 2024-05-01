import { IoClose } from 'react-icons/io5';
import { CardItemPropsType } from '../types';

const CartItem = ({ product, onDelete }: CardItemPropsType) => {
  if (!product) {
    return null;
  }
  return (
    <div className="flex divide-x">
      <div className="flex-1 p-2">{product.title}</div>
      <div className="flex-1 p-2">{product.price}</div>
      <div className="flex-1 p-2">{product.discountPercentage}</div>
      <div className="flex-1 p-2 flex justify-center"><button onClick={()=> onDelete(product.id)} className="border-none"><IoClose/></button></div>
    </div>
  );
};

export default CartItem