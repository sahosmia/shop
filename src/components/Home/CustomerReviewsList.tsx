import Review from "./Review";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./../../style.css";

// import required modules
import { Pagination } from "swiper/modules";

const CustomerReviewsList = ({ reviews }) => {
  return (
    <div className="grid  gap-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded-2xl "
      >
        {reviews.map((review, index) => (
          <SwiperSlide className=" " key={index}>
            <Review  {...review} />
          </SwiperSlide>

          // Spreading props to individual review component
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviewsList;
















