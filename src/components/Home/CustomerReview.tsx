import { reviews } from "../../data/designData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../../style.css";
import { Autoplay, Pagination } from "swiper/modules";


const CustomerReview = () => {
 
  return (
    <div className="py-10 md:py-20  bg-slate-50">
      <div className="container">
        <div className="text-center text-2xl md:text-4xl font-bold text-ass">
          What People Are Saying
        </div>
        <div className="mt-8 md:mt-16  ">
          <div className="grid ">
            <Swiper
              spaceBetween={20}
              loop={true}
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2
                },
                1180: {
                  slidesPerView: 3
                }
              }}
              pagination={{ clickable: true }}

            >
              {reviews.map((review) => (
                <SwiperSlide className=" bg-white rounded-2xl  p-8  text-start border border-gray-200 flex flex-col items-start " key={review.id}>

                  <div className="text-xl font-semibold mt-4 text-ass poetsen-one-regular">{review.heading}</div>
                  <p className="mt-4 text-assLight ">{review.description}</p>
                  <p className="mt-3 text-assLight">
                    
                    {/* {Array(review.rating.toFixed()).fill('⭐').join('')} */}
                    </p>
                  <div className="text-xl font-medium mt-4 text-primary ">
                    - {review.client}{" "}
                  </div>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
