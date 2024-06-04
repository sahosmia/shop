import Slider from "react-slick";
import bg1 from "../../assets/Sliders/slider1.jpg";
import bg2 from "../../assets/Sliders/slider2.jpg";
import bg3 from "../../assets/Sliders/slider6.jpg";
import bg4 from "../../assets/Sliders/slider7.jpg";
import bg5 from "../../assets/Sliders/slider8.jpg";
import bg6 from "../../assets/Sliders/slider9.jpg";
import SliderItem from "../Sliders/HeroSliderItem";

const HeroSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
  };
  
  return (
    <Slider {...settings}>
  
      <SliderItem bg={bg1} title="Fresh Vegetable with Fresh Salad"/>
      <SliderItem bg={bg2} title="Fresh Choocklet for Kids"/>
      <SliderItem bg={bg3} title="Frieze Died Food with Coconut"/>
      <SliderItem bg={bg4} title="Organic Fresh Nutural Tomato"/>
      <SliderItem bg={bg5} title="Nutural Farm Fresh Vagetable Products"/>
      <SliderItem bg={bg6} title="Without Formaline fruites and vegetable"/>
     
    </Slider>
  );
};

export default HeroSlider;
