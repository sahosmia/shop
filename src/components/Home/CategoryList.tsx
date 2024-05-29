import { categoriesData } from "../../data/dummy";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
const CategoryList = () => {
  return (
    <div className="pt-16 pb-6">
      <div className="container flex flex-wrap gap-2 relative">

        <Swiper
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          modules={[Autoplay, Navigation]}
          slidePrevClass="prev-slide"
          autoplay={{ delay: 5000 }}
          breakpoints={{
            360: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1180: {
              slidesPerView: 7,
            },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}

          
        >
          <div >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          {categoriesData.map((category) => (
            <SwiperSlide
              key={category.id}
              className="border hover:border-secondary transition-all  rounded-xl h-auto w-28 "
            >
              <Link to={`/products/category/${category.slug}`} className="">
                <div className="w-full h-20 ">
                  <img
                    className="h-full w-full object-contain"
                    src={category.thumbnail}
                    alt=""
                  />
                </div>
                <h4 className="p-2 min-h-10 text-center text-sm font-medium text-primary2">
                  {category.title}
                </h4>
              </Link>
            </SwiperSlide>
          ))}
          

        </Swiper>

        
      </div>
    </div>
  );
};

export default CategoryList;
