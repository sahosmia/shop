import { motion } from "framer-motion";
import { PageBannerType } from "../types";
import { downFadeVariants } from "../motions";

const PageBanner = ({ title }: PageBannerType) => {
  return (
    <section className=" bg-blue-200">
      <div className="container flex justify-center items-center h-80">
        <motion.h3
          variants={downFadeVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          {title}
        </motion.h3>
      </div>
    </section>
  );
};

export default PageBanner;
