import { motion } from "framer-motion";
import { downFadeVariants } from "../../motions";
import { Link } from "react-router-dom";

const LoginMessage = () => {
  return (
    <motion.div
      variants={downFadeVariants}
      initial="initial"
      whileInView="whileInView"
      className="w-full p-6 text-center"
    >
      <h2 className="text-2xl font-bold text-primary mb-4">Login First</h2>
      <p className="text-lg text-gray-600">
        To view your wish list, please log in to your account.
      </p>
      <Link
        to="/login"
        className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded hover:underline"
      >
        Go to Login
      </Link>
    </motion.div>
  );
};

export default LoginMessage;
