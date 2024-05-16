const ShopNowForHomePage = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <a className="relative block  duration-500 ease-in-out " href="">
        <div>
          <img
            className="duration-1000"
            src="https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbanner%2F1.png&w=2048&q=75"
            alt=""
          />
        </div>
        <div className="absolute inset-y-0 right-0  w-full flex flex-col items-center justify-center">
          <div className="text-white text-4xl font-bold">Best Sellers</div>
          <div className="text-white  text-2xl relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">
            Shop Now
          </div>
        </div>
      </a>
      <a className="relative block  duration-500 ease-in-out " href="">
        <div>
          <img
            className="duration-1000"
            src="https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbanner%2F2.png&w=2048&q=75"
            alt=""
          />
        </div>
        <div className="absolute inset-y-0 right-0  w-full flex flex-col items-center justify-center">
          <div className="text-white text-4xl font-bold">Best Sellers</div>
          <div className="text-white  text-2xl relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">
            Shop Now
          </div>
        </div>
      </a>
      
    </div>
  );
};

export default ShopNowForHomePage;
