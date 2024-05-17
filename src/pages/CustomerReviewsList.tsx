import Review from "./Review";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Pagination } from "swiper/modules";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const CustomerReviewsList = ({ reviews }) => {
  return (
    <div className="grid  gap-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl "
      >
        {reviews.map((review, index) => (
          <SwiperSlide className=" ">
            <Review key={index} {...review} />
          </SwiperSlide>

          // Spreading props to individual review component
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviewsList;
