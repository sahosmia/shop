import ProductItem from "../tools/ProductItem";
import Loading from "../tools/Loading";
import EmptyData from "../tools/EmptyData";
import CustomPagination from "./CustomPagination";
import { ProductType } from "../../types";
import { memo } from "react";

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
  handlePageChange: (value: number) => void;
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
          <div className="flex flex-wrap gap-5">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          {totalItems / 10 > 1 && (
            <CustomPagination
              totalItems={totalItems}
              itemsPerPage={10}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default memo(ProductListContent);
