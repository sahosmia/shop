import { Link } from "react-router-dom";
import { getDiscountPrice } from "../utils";
import { motion } from "framer-motion";
import { upFadeVariants } from "../motions";
import { toast } from "react-toastify";
import { ProductsPropsType } from "../types";


const ProductList = ({products}:ProductsPropsType) => {

  const handleAddtoCart = () => {
    toast.success("add success");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
      {products.map((product) => (
        <motion.div
          variants={upFadeVariants}
          initial="initial"
          whileInView="whileInView"
          whileHover={{y: -10, transition: { type:"spring", duration: .3}}}
          viewport={{ once: true }}
          key={product.id}
          className="shadow-lg"
        >
          <div className="w-full h-[200px] ">
            <img
              className="w-full h-full object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>

          <div className="m-5">
            <h3 className="text-sm lg:text-base">
              <Link
                className="text-base font-bold"
                to={`/products/${product.id}`}
              >
                {product.title}
              </Link>
              <span className="text-[#b8b843]">
                <Link to={`/category/${product.category}`}>
                  ( {product.category})
                </Link>
              </span>
            </h3>
            <p className="text-[#919090] text-sm line-clamp-2">
              {product.description}
            </p>

            <p className="text-rose-600 text-sm mt-4">
              <span className="text-[#919090] line-through">
                ${product.price.toFixed(2)}
              </span>{" "}
              ${getDiscountPrice(product.price, product.discountPercentage)}
            </p>

            {/* <AddtoCartButton
        product={item}
        isPrice={false}
        className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full"
      /> */}

            <motion.button
              initial={{ backgroundColor: "#1a1a1a" }}
              whileHover={{ backgroundColor: "#3a3a3a", transition:{duration:.3} }}
              onClick={handleAddtoCart}
              className="w-full   text-sm text-center py-2 mt-5 text-white rounded-full"
            >
              Add To Cart
            </motion.button>
            {/* <button onClick={handleAddtoCart} className={className}>
        Add To Cart
        {isPrice &&
          `- $ ${getDiscountPrice(product.price, product.discountPercentage)}`}
      </button> */}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
