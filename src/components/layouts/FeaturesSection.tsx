import { features } from "../../data/designData";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const icon= {
  support: <BiSolidPhoneCall />,
  moneyBack: <FaMoneyCheckDollar />,
  shipping: <FaShippingFast />,
  guarantee: <FaPaperPlane />,
};

const FeaturesSection = () => {
  return (
    <div className="bg-slate-50">


    <div className="container ">
      <div className="py-10 md:py-20 ">
        <div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 lg:gap-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center max-w-80 m-auto"
            >
              <span className="lg:text-5xl text-5xl text-primary">
                {icon[feature.icon]}
              </span>

              <div className=" text-ass text-center mt-5 text-xl font-semibold  ">
                {feature.heading}
              </div>
              <div className="text-center text-assLight mt-3">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturesSection;
