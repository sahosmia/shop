import Brand from "./Brand";

const BrandBlock = () => {
  const brandName = [
    {
      id: 1,
      img: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F1.png&w=384&q=75",
    },
    {
      id: 2,
      img: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F2.png&w=384&q=75",
    },
    {
      id: 3,
      img: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F3.png&w=384&q=75",
    },
    {
      id: 4,
      img: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F4.png&w=384&q=75",
    },
    {
      id: 5,
      img: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F5.png&w=384&q=75",
    },
    {
      id: 6,
      img: "https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F6.png&w=384&q=75",
    },
  ];
  return (
    <div className="md:py-[60px] py-[32px]">
      <div className="container">
        <div className="">
          <div className="flex justify-center items-center ">
            {brandName.map((brand) => (
              <Brand key={brand.id} id={brand.id} img={brand.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBlock;
