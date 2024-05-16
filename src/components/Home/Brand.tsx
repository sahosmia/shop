const Brand = ({id,img}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-36px]  mr-10">
       
          <img
            src={img}
            loading="lazy"
            width={300}
            height={300}
            decoding="async"
            key={id}
            className="w-auto h-full duration-500 relative object-cover"
            alt=""
          />
       
      </div>
    </div>
  );
};

export default Brand;
