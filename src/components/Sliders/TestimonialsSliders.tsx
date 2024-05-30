import "swiper/css";
import "../../style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { reviews } from "../../data/designData";

const TestimonialsSliders = () => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      slidesPerView={1}
      modules={[Autoplay]}
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

          </p>
          <div className="text-xl font-medium mt-4 text-primary ">
            - {review.client}{" "}
          </div>
        </SwiperSlide>

      ))}
    </Swiper>
  )
}

export default TestimonialsSliders