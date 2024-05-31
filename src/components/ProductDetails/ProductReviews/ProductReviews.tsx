import useAuth from "../../../hooks/useAuth";
import { ProductPropsType } from "../../../types";
import LoginMessage from "../../tools/LoginMessage";
import ProductReviewsContent from "./ProductReviewsContent";
import ProductReviewsForm from "./ProductReviewsForm";

const ProductReviews = ({ product }: ProductPropsType) => {
  const auth = useAuth();
  return (
    <div>
      <ProductReviewsContent product={product} />
      {auth.user === null ? <LoginMessage /> : <ProductReviewsForm product={product}/>}
    </div>
  );
};

export default ProductReviews;
