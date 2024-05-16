import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
interface IFromInputs {
  name: string;
  email: string;
  phone: string;
  street: string;
  note: string;
  city: string;
}

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFromInputs>();
  const formSubmit = (data: IFromInputs) => {
    console.log(data);
  };
  return (
    <>
      <Helmet>
        <title>CheckoutPage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <section>
        <div className="container py-16">
          <div className="grid">
            <h4 className="text-2xl font-semibold capitalize mb-5">
              Information
            </h4>
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="flex gap-5">
                <div className="mb-5 w-full">
                  <input
                    {...register("name", { required: "Name is required." })}
                    type="text"
                    placeholder="Your Name *"
                    className={`${inputClass} ${
                      errors.name ? "border-red-600" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-700 mt-1">{errors.name?.message}</p>
                  )}
                </div>

                <div className="mb-5 w-full">
                  <input
                    {...register("email", {
                      required: "Email is required.",
                    })}
                    type="text"
                    placeholder="Your Email *"
                    className={`${inputClass} ${
                      errors.email ? "border-red-600" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-700 mt-1">{errors.email?.message}</p>
                  )}{" "}
                </div>
              </div>

              <div className="flex gap-5">
                <div className="mb-5 w-full">
                  <input
                    {...register("phone", {
                      required: "Phone is required.",
                      pattern: {
                        value: /^01[0-9]{9}$/,
                        message:
                          "Give Valid Phone Number, It will start by '01' and 11 digits",
                      },
                    })}
                    type="tel"
                    placeholder="Your Phone *"
                    className={`${inputClass} ${
                      errors.phone ? "border-red-600" : "border-gray-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-700 mt-1">{errors.phone?.message}</p>
                  )}{" "}
                </div>
              </div>


              <div className="mb-5">
                <select
                  {...register("city", { required: "This filed is required"})}
                  id=""
                  className={`${inputClass} ${
                    errors.city ? "border-red-600" : "border-gray-200"
                  }`}
                >
                  <option value="">
                    Select A options
                  </option>
                  {cities &&
                    cities.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                </select>
                {errors.city && (
                  <p className="text-red-700 mt-1">{errors.city?.message}</p>
                )}{" "}              </div>

              <div className="mb-5">
                <input
                  {...register("street", { required: "This data is need" })}
                  type="text"
                  placeholder="Your Street *"
                  className={`${inputClass} ${
                    errors.street ? "border-red-600" : "border-gray-200"
                  }`}
                />
                {errors.street && (
                  <p className="text-red-700 mt-1">{errors.street?.message}</p>
                )}{" "}
              </div>
              <div className="mb-5">
                <textarea
                  {...register("note")}
                  placeholder="Add Note"
                  className={`${inputClass} ${
                    errors.note ? "border-red-600" : "border-gray-200"
                  }`}
                />
                {/* <p className="text-red-700 mt-1">This filed is required !!</p> */}
              </div>
              <button
                type="submit"
                className="bg-primary2 bg-opacity-80 hover:bg-opacity-100  text-white px-5 py-2 rounded "
              >
                Checkout
              </button>
            </form>
            <DevTool control={control} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

const inputClass =
  "placeholder:text-sm placeholder:text-gray-400 rounded py-3 px-4 outline-none ring-0 shadow-none  transition-all focus:border-primary focus:shadow-none focus:ring-0 w-full";

const cities = [
  { value: "chuadanag", label: "Chuadanga" },
  { value: "chuadanag1", label: "Chuadanga" },

  { value: "mumbai", label: "Mumbai" },

  { value: "karachi", label: "Karachi" },
  { value: "chuadanag3", label: "Chuadanga" },
];
