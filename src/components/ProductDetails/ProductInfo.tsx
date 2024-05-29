import { useEffect, useState } from "react";
import { getDiscountPrice } from "../../utils";
import { BiCartAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import useCartsActions from "../../hooks/useCartsActions";
import useCartsItem from "../../hooks/useCartsItem";
import { ProductType } from "../../types";

const ProductInfo = ({ product }: { product: ProductType }) => {
  const cartItem = useCartsItem(product.id);

  const [cartQuantity, setCartQuantity] = useState<number>(
    (cartItem !== null && cartItem?.quantity) || 1
  );
  const navigate = useNavigate();
  const carts = useCarts();
  const { handleAddToCart } = useCartsActions(product.id, cartQuantity);

  // Product cart quantity
  useEffect(() => {
    const checkExists = carts.find((item) => item.productId === product.id);
    if (checkExists) {
      setCartQuantity(checkExists.quantity);
    }
  }, [carts, product]);

  const handleQuantityChange = (change: number) => {
    if (cartQuantity + change > 0) {
      setCartQuantity((prev) => prev + change);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => {
      return navigate("/checkout");
    }, 1000);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-ass pb-2">{product.title}</h2>
      <div className="flex gap-2 items-end mb-4 ">
        <span className=" font-semibold text-primary text-2xl">
          $
          {product.discountPercentage === 0
            ? product.price
            : getDiscountPrice(product.price, product.discountPercentage)}
        </span>
        {product.discountPercentage !== 0 && (
          <div>
            <span className=" line-through text-assLight  text-lg font-medium">
              ${product.price.toFixed(2)}
            </span>
            <span className=" text-primary2 text-sm  font-medium ml-3">
              (-{product.discountPercentage}%)
            </span>
          </div>
        )}
      </div>
      <p className="text-assLight mb-2">{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>tag: {product.brand}</p>
      <div className="flex gap-2 flex-wrap">
        <div className="border-2 inline-block rounded border-primary">
          <button
            className="w-9 h-9 text-primary text-xl inline-block"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="px-1">{cartQuantity}</span>
          <button
            className="w-9 h-9 text-primary text-xl "
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-primary bg-opacity-80 hover:bg-opacity-100  text-white  transition-all duration-300 py-2 px-4 text-sm font-medium  flex justify-center items-center  rounded"
        >
          <BiCartAdd className="text-base mr-1" />
          Add to cart
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="bg-primary2 bg-opacity-80 hover:bg-opacity-100  text-white  transition-all duration-300 py-2 px-4 text-sm font-medium  flex justify-center items-center  rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
