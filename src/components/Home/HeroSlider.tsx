import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
    
  };
  return (
    <Slider {...settings}>
      <section className="bg-red-500 h-40">
        <div className="container">
          <div className="">1</div>
        </div>
      </section>
      <section className="bg-orange-500 h-40">
        <div className="container">
          <div className="">1</div>
        </div>
      </section>
      <section className="bg-green-500 h-40">
        <div className="container">
          <div className="">1</div>
        </div>
      </section>
      <section className="bg-blue-500 h-40">
        <div className="container">
          <div className="">1</div>
        </div>
      </section>
    </Slider>
  );
};

export default HeroSlider;
