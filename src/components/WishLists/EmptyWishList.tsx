import { motion } from "framer-motion";
import { downFadeVariants, rightFadeVariants, upFadeVariants } from "../../motions";
import { Link } from "react-router-dom";

const EmptyWishList = () => {
  return (
    <div className="w-full">
      <motion.h4
        variants={downFadeVariants}
        initial="initial"
        whileInView="whileInView"
        className="text-3xl font-bold text-primary"
      >
        Your Wish List is Empty
      </motion.h4>
      <motion.p
        variants={rightFadeVariants}
        initial="initial"
        whileInView="whileInView"
        className="text-assLight my-5 max-w-2xl"
      >
        It seems like your wish list is empty. You haven't added any products
        yet. Explore our wide range of products and add them to your wish list
        for easy access later.
      </motion.p>
      <motion.div
        variants={upFadeVariants}
        initial="initial"
        whileInView="whileInView"
      >
        <Link className="primary-btn" to="/products">
          Explore Products
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyWishList