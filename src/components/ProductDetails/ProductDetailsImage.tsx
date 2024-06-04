import { useEffect, useState } from "react";
import { ProductType } from "../../types";

const ProductDetailsImage = ({ product }: { product: ProductType }) => {
  const [thumbnail, setThunbnail] = useState<string>(product?.thumbnail);
  useEffect(() => {
    setThunbnail(product?.thumbnail);
  }, [product]);
  return (
    <div>
      <div className="h-[300px] border mb-5">
        <img className="w-full h-full object-contain" src={thumbnail} alt="" />
      </div>
      <div className="flex gap-1">
        <div
          className="w-24 h-24 border hover:border-primary2"
          onClick={() => setThunbnail(product.thumbnail)}
        >
          <img
            className="w-full h-full object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        {product.images.map((img) => (
          <div
            key={img}
            className="w-24 h-24 border hover:border-primary2"
            onClick={() => setThunbnail(img)}
          >
            <img
              className="w-full h-full object-contain"
              src={img}
              alt={product.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsImage;
