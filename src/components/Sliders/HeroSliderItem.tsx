import { Link } from "react-router-dom";

const SliderItem = ({ bg, title }: { bg: string; title: string }) => {
  return (
    <section className="h-[300px] lg:h-[650px] relative">
      <div className="container z-20 flex items-center h-full">
        <div className=" w-full md:w-1/2">
          <h1 className="poetsen-one-regular text-xl lg:text-6xl leading-2 lg:leading-[80px] pb-5 text-ass">
            {title}
          </h1>
          <p className="pr-5 lg:pr-40 text-assLight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            explicabo cum deleniti facilis, odio velit doloremque nesciunt
            praesentium voluptatem ut distinctio minima nam sint ea, eveniet
            vero perspiciatis sit repellat?
          </p>
          <Link
            to="/products"
            className="rounded px-5 py-2 bg-primary2 hover:bg-secondary inline-block transition-all text-white font-semibold mt-5"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <picture className=" absolute inset-0 -z-10">
        <img className="h-full w-full" src={bg} alt="" />
      </picture>
    </section>
  );
};

export default SliderItem;
