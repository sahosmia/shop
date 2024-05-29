import { Helmet } from "react-helmet"
import PageBanner from "../PageBanner"

const ProductNotFound = () => {
  return (
    <>
    <Helmet>
        <title>Product Category Page</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <PageBanner title="Not Found" />
    </>
  )
}

export default ProductNotFound