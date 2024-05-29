import { motion } from "framer-motion";
import { PageBannerType } from "../types";
import { downFadeVariants } from "../motions";
// import bg from "../assets/page_header.jpg"
import bg from "../assets/bg_breadcrum.jpg"

const PageBanner = ({ title }: PageBannerType) => {
  return (
    <section className="relative  bg-no-repeat bg-cover " style={{backgroundImage:`url(${bg})`}}>
      {/* <div className="absolute inset-0 bg-black opacity-50 "></div> */}

      <div className="container flex justify-center items-center h-52">
        <motion.h3
          variants={downFadeVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-4xl  text-primary poetsen-one-regular"
        >
          {title}
        </motion.h3>
      </div>
    </section>
  );
};

export default PageBanner;
