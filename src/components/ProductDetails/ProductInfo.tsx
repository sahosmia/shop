import { useEffect, useState } from "react";
import {
  getBrandByTitle,
  getCategoryByTitle,
  getDiscountPrice,
  getTagByTitle,
} from "../../utils";
import { BiCartAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import useCartsActions from "../../hooks/useCartsActions";
import useCartsItem from "../../hooks/useCartsItem";
import { ProductType } from "../../types";
import { reviewsData } from "../../data/dummy";
import { Rating } from "@mui/material";
import ShareButtons from "./ShareButtons";



const ProductInfo = ({ product }: { product: ProductType }) => {
  const cartItem = useCartsItem(product.id);
  const categoryItem = getCategoryByTitle(product.category);
  const brandItem = getBrandByTitle(product.brand);

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

  // Calculate average rating
  const productReviews = reviewsData.filter(
    (item) => item.productId === product.id
  );
  const averageRating = productReviews.length
    ? productReviews.reduce((acc, review) => acc + review.rating, 0) /
      productReviews.length
    : 0;

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 pb-4">{product.title}</h2>
      <div className="flex gap-2 items-end mb-4">
        <span className="font-semibold text-primary text-2xl">
          $
          {product.discountPercentage === 0
            ? product.price
            : getDiscountPrice(product.price, product.discountPercentage)}
        </span>
        {product.discountPercentage !== 0 && (
          <div>
            <span className="line-through text-gray-500 text-lg font-medium">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-green-500 text-sm font-medium ml-3">
              (-{product.discountPercentage}%)
            </span>
          </div>
        )}
      </div>
      {/* Display average rating */}
      <div className="flex items-center mb-3">
        <Rating
          name="half-rating-read"
          defaultValue={averageRating}
          precision={0.5}
          readOnly
          size="small"
        />
        <span className="text-assLight text-sm ml-1">
          ({productReviews.length} reviews)
        </span>
      </div>

      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="mb-2">
        <span className="font-semibold">Category:</span>{" "}
        {categoryItem ? (
          <Link
            to={`/products/category/${categoryItem.slug}`}
            className="text-ass hover:text-primary transition-all"
          >
            {product.category}
          </Link>
        ) : (
          product.category
        )}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Brand:</span>{" "}
        {brandItem ? (
          <Link
            to={`/products/brand/${brandItem.slug}`}
            className="text-ass hover:text-primary transition-all"
          >
            {product.brand}
          </Link>
        ) : (
          product.brand
        )}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Tag:</span>{" "}
        {product.tags.length > 0
          ? product.tags.map((tag, index) => (
              <span key={tag}>
                <Link
                  to={`/products/tag/${getTagByTitle(tag)?.slug}`}
                  className="text-ass hover:text-primary transition-all"
                >
                  {tag}
                </Link>
                {index < product.tags.length - 1 && ", "}
              </span>
            ))
          : "No tags"}
      </p>
      <div className="flex items-center mb-4 flex-wrap gap-2">
        <div className="border-2 rounded border-primary flex items-center">
          <button
            className="w-9 h-9 text-primary text-xl inline-flex items-center justify-center"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="px-3">{cartQuantity}</span>
          <button
            className="w-9 h-9 text-primary text-xl inline-flex items-center justify-center"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition-all duration-300 py-2 px-4 text-sm font-medium flex justify-center items-center rounded"
        >
          <BiCartAdd className="text-base mr-1" />
          Add to cart
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className=" bg-green-500 bg-opacity-80 hover:bg-opacity-100 text-white transition-all duration-300 py-2 px-4 text-sm font-medium flex justify-center items-center rounded"
        >
          Buy Now
        </button>
      </div>

      <ShareButtons productId={product.id}/>
    </div>
  );
};

export default ProductInfo;
