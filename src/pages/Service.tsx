import { PiPhoneCallThin } from "react-icons/pi";
const iconMap = {
  support: "📞", // You can replace these with an icon library or custom icons
  "money-back": "💸",
  shipping: "✈️",
  guarantee: "🛡️",
};

const Service = ({ icon, heading, description }) => {
  return (
    <div className=" ">
       <div className="flex flex-col items-center justify-center ">
            <i className="lg:text-7xl text-5xl">
              {iconMap[icon]}
              
            </i>

            <div className=" text-center mt-5 text-xl font-semibold  ">
              {heading}
            </div>
            <div className="text-center mt-3">{description}</div>
          </div>
    </div>
  );
};

export default Service;
<dir></dir>;
