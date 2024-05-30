import { motion } from "framer-motion";
import ProductItem from "../tools/ProductItem";
import Loading from "../tools/Loading";
import EmptyData from "../tools/EmptyData";
import CustomPagination from "./CustomPagination";
import { ProductType } from "../../types";

const ProductListContent = ({
  loading,
  totalItems,
  products,
  page,
  handlePageChange,
}: {
  loading: boolean;
  totalItems: number;
  products: ProductType[];
  page: number;
  handlePageChange: (value:number) => void;
}) => {
  return (
    <div className="pt-5">
      {loading ? (
        <Loading />
      ) : totalItems === 0 ? (
        <EmptyData />
      ) : (
        <>
          <div className="flex gap-4 items-center justify-between pb-2">
            <div className="flex gap-4 items-center">
              <p className="text-assLight text-sm">
                We found{" "}
                <span className="text-primary font-semibold">{totalItems}</span>{" "}
                items for you!
              </p>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10">
            {products.map((product) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                key={product.id}
              >
                <ProductItem product={product} />
              </motion.div>
            ))}
          </div>

          {totalItems / 6 > 1 && (
            <CustomPagination
              totalItems={totalItems}
              itemsPerPage={6}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductListContent;
