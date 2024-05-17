import { Helmet } from "react-helmet";

const CheckoutPage = () => {
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
            <form action="">
              <div className="flex gap-5">
                <div className="mb-5 w-1/2">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className={inputClass}
                  />
                  {/* <p className="text-red-700 mt-1">This filed is required !!</p> */}
                </div>

                <div className="mb-5 w-1/2">
                  <input
                    type="text"
                    placeholder="Your Email *"
                    className={inputClass}
                  />
                  {/* <p className="text-red-700 mt-1">This filed is required !!</p> */}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mb-5 w-full">
                  <input
                    type="text"
                    placeholder="Your Phone *"
                    className={inputClass}
                  />
                  {/* <p className="text-red-700 mt-1">This filed is required !!</p> */}
                </div>

                <div className="mb-5 w-full">
                  {/* <input
                    type="text"
                    placeholder="Your Name *"
                    className={inputClass}
                  /> */}
                  {/* <p className="text-red-700 mt-1">This filed is required !!</p> */}
                </div>
              </div>

              <div className="mb-5">
                <select name="country" id="" className={inputClass}>
                  {cities &&
                    cities.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                </select>
                <p className="text-red-700 mt-1">This filed is required !!</p>
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your Street *"
                  className={inputClass}
                />
                {/* <p className="text-red-700 mt-1">This filed is required !!</p> */}
              </div>
              <div className="mb-5">
                <textarea placeholder="Add Note" className={inputClass} />
                {/* <p className="text-red-700 mt-1">This filed is required !!</p> */}
              </div>
            </form>
            name email phone country town/city street add exta address note
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

const inputClass =
  "placeholder:text-sm placeholder:text-gray-400 rounded py-3 px-4 outline-none ring-0 shadow-none border-gray-200 transition-all focus:border-red-600 focus:shadow-none focus:ring-0 w-full";

const cities = [
  { value: "chuadanag", label: "Chuadanga" },
  { value: "chuadanag", label: "Chuadanga" },

  { value: "mumbai", label: "Mumbai" },

  { value: "karachi", label: "Karachi" },
  { value: "chuadanag", label: "Chuadanga" },
];
