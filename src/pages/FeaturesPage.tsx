import Service from "./Service";

const FeaturesPage = ({ features }) => {
  return (
    <div className="container ">
      <div className="md:py-20 py-10">
        <div className="grid items-start lg:grid-cols-4 grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <Service key={index} {...feature} />
            // Spreading props from features array
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
