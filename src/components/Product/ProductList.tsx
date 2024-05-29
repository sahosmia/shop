import { motion } from "framer-motion";
import { ProductsPropsType } from "../../types";
import ProductItem from "../tools/ProductItem";

const ProductList = ({ products }: ProductsPropsType) => {




  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
        {products.map((product) => (
          <motion.div
           
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={product.id}
            className="shadow-lg"
          >
           

            <ProductItem product={product}/>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
