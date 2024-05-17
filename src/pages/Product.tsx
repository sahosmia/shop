const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="cursor-pointer block mt-5">
      <div className="bg-white relative overflow-hidden rounded-3xl ">
        <div className="uppercase bg-green-400 px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
          {" "}
          New
        </div>

        <div className="w-full h-full  rounded-2xl">
          <div className="w-[300px] h-[400px] ">
            <img
              src={product.thumbnail}
              alt=""
              className="rounded-2xl object-cover w-full h-full "
            />
          </div>

          <div className="mt-5 px-3 py-3">
            <h3 className="text-xl">{product.title}</h3>
            <div className="flex">
              <div className="text-lg mt-3">
                <span className="font-bold"> $ {product.price} </span>
                <span className="bg-green-400 rounded-2xl px-3 ml-3">
                  - {product.discountPercentage} %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
