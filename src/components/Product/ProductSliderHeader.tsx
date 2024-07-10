const ProductSliderHeader = ({
  prevClass,
  nextClass,
  title,
}: {
  prevClass: string;
  nextClass: string;
  title: string;
}) => {
  return (
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
  );
};

export default ProductSliderHeader;
