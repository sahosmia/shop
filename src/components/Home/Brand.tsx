import { brands } from "../../data/designData";

const Brand = () => {
  return (
    <div className=" py-8 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
          {brands.map((brand) => (
            <div key={brand.id} className=" flex items-center justify-center">
              <img
                src={brand.img}
                loading="lazy"
                className="max-h-10 "
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
