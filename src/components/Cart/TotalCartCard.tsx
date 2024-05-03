import { CartProductType, CuponType } from "../../types";

type PropsType = {
  cartProducts: CartProductType[] ;
  cuponAvailable: CuponType | null;
};

const TotalCartCard = ({ cartProducts, cuponAvailable }: PropsType) => {
  // total amount
  const totalAmount = cartProducts?.reduce((total: number, product) => {
    const discountedPrice =
      product.price - (product.price * product.discountPercentage) / 100;
    return total + discountedPrice * product.quantity;
  }, 0);

  const cuponDiscount = () => {
    if (cuponAvailable && totalAmount) {
      return (totalAmount * cuponAvailable.discount) / 100;
    }
    return 0;
  };
  const subtotal = totalAmount && totalAmount - cuponDiscount();

  return (
    <div className="divide-y border">
      <div className="flex divide-x">
        <div className="flex-1 p-2">Total</div>
        <div className="flex-1 p-2 text-end">{totalAmount.toFixed(2)}</div>
      </div>
      <div className="flex divide-x">
        <div className="flex-1 p-2">Discount</div>
        <div className="flex-1 p-2 text-end">{cuponDiscount().toFixed(2)}</div>
      </div>
      <div className="flex divide-x">
        <div className="flex-1 p-2">Sub Total</div>
        <div className="flex-1 p-2 text-end">{subtotal.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default TotalCartCard;
