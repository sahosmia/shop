import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { users } from "../data/users";
import { useDispatch } from "react-redux";
import { Login } from "../features/auth/authSlice";
interface IFromInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (auth.user !== null) {
      navigate("/");
    }
  }, [auth, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFromInputs>();
  const formSubmit = (formData: IFromInputs) => {
    // check user exist
    const userExist = users.find((user) => user.email === formData.email);
    if (userExist) {
      if (userExist.password === formData.password) {
        console.log(userExist);
        dispatch(Login({
          payload:userExist
        }))
        navigate("/")
      } else {
        setError("email", {
          type: "custom",
          message: "Your crediantial is wrong",
        });
      }
    } else {
      setError("email", { type: "custom", message: "This Email Not Found" });
    }

    // isset true next action or make a setError
    // call redux method
    console.log(formData);
  };
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <div className="grid place-content-center h-screen ">
        <div className=" p-5 border border-gray-200 rounded w-[500px]">
          <h4 className=" text-4xl poetsen-one-regular text-primary my-5  text-center">
            Login Your Account
          </h4>
          <p className=" w-4/5 m-auto text-center mb-8">
            Consectetur adipisicing elit. Neque dolorum voluptas consequuntur.
          </p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="mb-5">
              <input
                {...register("email", { required: "This data is need" })}
                type="text"
                placeholder="Your Email *"
                className={`input-class ${
                  errors.email ? "border-red-600" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <p className="text-red-700 mt-1">{errors.email?.message}</p>
              )}
            </div>
            <div className="mb-5">
              <div className=" relative">
                <input
                  {...register("password", { required: "This data is need" })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password *"
                  className={`input-class ${
                    errors.password
                      ? "border-red-600"
                      : "border-gray-200 relative"
                  }`}
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword((prev) => !prev)}
                    className=" absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-800 transition-all"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setShowPassword((prev) => !prev)}
                    className=" absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-800 transition-all"
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-red-700 mt-1">{errors.password?.message}</p>
              )}
            </div>
            <button
              type="submit"
              className=" bg-primary2 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 text-white font-bold  py-2 rounded w-full"
            >
              Login
            </button>
          </form>

          <p className="py-3">
            I have no account.{" "}
            <Link to="/" className=" text-primary underline cursor-pointer">
              Create a new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
