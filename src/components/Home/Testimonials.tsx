
import TestimonialsSliders from "../Sliders/TestimonialsSliders";


const Testimonials = () => {
  return (
    <div className="py-10 md:py-20  bg-slate-50">
      <div className="container">
        <div className="text-center text-2xl md:text-4xl font-bold text-ass">
          What People Are Saying
        </div>
        <div className="mt-8 md:mt-16  ">
          <div className="grid ">
           <TestimonialsSliders/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
