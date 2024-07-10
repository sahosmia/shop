import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductItem from "../Product/ProductItem";
import { ProductType } from "../../types";
const ProductSlider = ({
  prevClass,
  nextClass,
  title,
  products,
}: {
  prevClass: string;
  nextClass: string;
  title: string;
  products: ProductType[];
}) => {
  return (
    <div className="container py-20">
      <div className="relative mb-5">
        <div className=" text-2xl md:text-4xl font-bold text-ass">{title}</div>
        <div className=" absolute top-1/2 right-0 ">
          <div
            className={`swiper-button-prev ${prevClass} absolute !-left-16 !text-primary hover:!text-secondary transition-all after:!text-lg`}
          ></div>
          <div
            className={`swiper-button-next ${nextClass} absolute right-0 !text-primary hover:!text-secondary transition-all after:!text-lg`}
          ></div>
        </div>
      </div>
      <div className="grid">
        <Swiper
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
