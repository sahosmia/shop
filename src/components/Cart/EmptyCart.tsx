import { motion } from "framer-motion";
import { downFadeVariants, rightFadeVariants, upFadeVariants } from "../../motions";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="w-full">
      <motion.h4
        variants={downFadeVariants}
        initial="initial"
        whileInView="whileInView"
        className="text-2xl font-bold text-primary mb-4"
      >
        Your cart list is empty.
      </motion.h4>
      <motion.p
        variants={rightFadeVariants}
        initial="initial"
        whileInView="whileInView"
        className="text-assLight mb-5 max-w-2xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        beatae officia sapiente tenetur perferendis nisi doloremque, a laborum
        alias, excepturi inventore, soluta eius nam nihil temporibus officiis
        quae voluptate porro?
      </motion.p>
      <motion.div
        variants={upFadeVariants}
        initial="initial"
        whileInView="whileInView"
      >
        <Link className="primary-btn" to="/products">
          Continue Shoping
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart