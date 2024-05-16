import { BiCartAdd } from "react-icons/bi";
import { getDiscountPrice } from "../utils";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../features/carts/cartsSlice";
import { toast } from "react-toastify";
import { ProductType } from "../types";

const Product = ({ product } : ProductType) => {
  const dispatch = useDispatch();

  const handleAddtoCart = (id: number) => {
    dispatch(
      ADD_CART({
        productId: id,
        quantity: 1,
      })
    );
    toast.success("add success");
  };
  return (
    <div className="cursor-pointer block mt-5">
      <div className="bg-white relative overflow-hidden rounded-lg border ">
        <div className="absolute top-3 left-3">
          <div className="uppercase bg-green-400 px-3 py-0.5 text-[10px] text-white inline-block rounded-full  z-0 mr-2">
            New
          </div>
          {/* {product.discountPercentage !== 0 && (
            <div className="uppercase bg-red-400 px-3 py-0.5 text-[10px] text-white inline-block rounded-full  z-0 mr-2">
              12.36%
            </div>
          )} */}
          <div className="uppercase bg-orange-400 px-3 py-0.5 text-[10px] text-white inline-block rounded-full  z-0 mr-2">
            Sale
          </div>
        </div>

        <div className="">
          <div className="h-[200px]  overflow-hidden ">
            <img
              src={product.thumbnail}
              alt={product.title}
              className=" object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="mt-2 p-3">
            <h6 className="text-xs text-assLight mb-3">{product.category}</h6>
            <h3 className="font-medium text-ass mb-3">{product.title}</h3>
            <div className="flex items-center mb-3">
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <span className="text-assLight text-sm ml-1">(2)</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-end">
                <span className=" font-semibold text-primary">
                  $
                  {product.discountPercentage === 0
                    ? product.price
                    : getDiscountPrice(
                        product.price,
                        product.discountPercentage
                      )}
                </span>
                {product.discountPercentage !== 0 && (
                  <span className="text-sm line-through text-assLight font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              <button onClick={() => handleAddtoCart(product.id)} className="bg-primary bg-opacity-25 hover:bg-opacity-80 text-primary2 hover:text-white hover:-translate-y-1 transition-all duration-300 py-2 px-4 text-sm font-medium  flex justify-center items-center  rounded">
                <BiCartAdd className="text-base mr-1"/>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
