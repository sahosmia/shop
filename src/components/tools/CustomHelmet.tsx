import { Helmet } from "react-helmet";

const CustomHelmet = ({
  title,
  description = "",
}: {
  title: string;
  description?: string;
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default CustomHelmet;
