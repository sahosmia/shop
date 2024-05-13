import { useState } from "react";
import { productsData } from "../data/dummy";
import Product from "./Product";
const ProductForHomePage = () => {
  const [selected, setSelected] = useState("top");

  // Define a function to handle button clicks
  const handleClick = (buttonName) => {
    setSelected(buttonName);
  };
  const product4 = productsData.slice(0, 4);

  return (
    <div className="container">
      <div className="text-4xl text-center font-semibold p-5">What's New</div>

      {/* <div className="flex items-center  justify-center  bg-[#eec4c4] rounded-2xl m-6   gap-6 h-[50px] ">
       

        <div className="uppercase  rounded-2xl   bg-white cursor-pointer ">
         <span className=" p-6 font-semibold text-xl" >top</span>
        </div>
        <div className="uppercase  rounded-2xl   bg-white cursor-pointer ">
         <span className=" p-6 font-semibold text-xl " >T-shirts</span>
        </div>
        <div className="uppercase  rounded-2xl   bg-white cursor-pointer ">
         <span className=" p-6 font-semibold  text-xl" >Dress</span>
        </div>
        <div className="uppercase  rounded-2xl   bg-white cursor-pointer ">
         <span className=" p-6 font-semibold text-xl" >sets</span>
        </div>
        <div className="uppercase  rounded-2xl   bg-white cursor-pointer ">
         <span className=" p-6 font-semibold text-xl" >Shirt</span>
        </div>
      </div> */}
      <div className="flex items-center justify-center  rounded-2xl bg-gray-200 p-1 space-x-2  justify-items-center">
        <div className="max-w-md">
          <button
            className={`py-2 px-4 rounded-2xl transition-colors ${
              selected === "top"
                ? "bg-white text-blue-600"
                : "bg-transparent text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => handleClick("top")}
          >
            Top
          </button>

          <button
            className={`py-2 px-4 rounded-lg transition-colors ${
              selected === "t-shirt"
                ? "bg-white text-blue-600"
                : "bg-transparent text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => handleClick("t-shirt")}
          >
            T-shirt
          </button>

          <button
            className={`py-2 px-4 rounded-lg transition-colors ${
              selected === "dress"
                ? "bg-white text-blue-600"
                : "bg-transparent text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => handleClick("dress")}
          >
            Dress
          </button>

          <button
            className={`py-2 px-4 rounded-lg transition-colors ${
              selected === "sets"
                ? "bg-white text-blue-600"
                : "bg-transparent text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => handleClick("sets")}
          >
            Sets
          </button>

          <button
            className={`py-2 px-4 rounded-lg transition-colors ${
              selected === "shirt"
                ? "bg-white text-blue-600"
                : "bg-transparent text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => handleClick("shirt")}
          >
            Shirt
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4  m-10">
        {product4.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {/* <Product /> */}
      </div>
    </div>
  );
};

export default ProductForHomePage;
