const Review = ({ rating, heading, description, customer_name, date }) => {
  return (
    <div className=" bg-white rounded-2xl  p-8  text-start mb-5">
      <div className="flex ">
        {}
        <p className="my-3">{rating} ⭐</p>
      </div>
      <div className="text-xl font-semibold mt-4">{heading}</div>
      <div className="mt-2">{description}</div>
      <div className="text-xl font-semibold mmt-4">{customer_name} </div>
      <div className="text-slate-400 data-[]: mt-1">{date}</div>
    </div>
  );
};

export default Review;
