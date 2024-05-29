import { Link } from "react-router-dom";
import { storeBannerData } from "../../data/designData";

const StoreBanner = () => {
  return (
    <div className="my-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6">
        {storeBannerData.map((item) => (
          <div
            key={item.id}
            className={`p-10 rounded-lg bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <h4 className="text-2xl mb-4 font-semibold max-w-60 min-h-28 poetsen-one-regular text-ass">
              {item.title}
            </h4>
            <Link
              to="/products"
              className="mt-10 bg-primary hover:bg-secondary transition-all  text-white font-semibold rounded text-sm py-2 px-3"
            >
              Shop now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreBanner;
