import { useState } from "react";
import { ProductPropsType } from "../../types";
import ProductDescription from "./ProductDescription";
import ProductReturnPolicy from "./ProductReturnPolicy";
import ProductReviews from "./ProductReviews/ProductReviews";

const ProductDescriptionReviews = ({ product }: ProductPropsType) => {
  const [activeTab, setActiveTab] = useState("Reviews");

  const tabs = ["Reviews", "Description", "Return Policy"];

  return (
    <div className="container mt-20">
      <nav className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-lg px-4 py-2 focus:outline-none ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="p-4">
        {activeTab === "Reviews" && <ProductReviews product={product} />}
        {activeTab === "Description" && (
          <ProductDescription description={product.description} />
        )}
        {activeTab === "Return Policy" && <ProductReturnPolicy />}
      </div>
    </div>
  );
};

export default ProductDescriptionReviews;
