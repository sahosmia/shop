import { reviewsData } from "../../../data/dummy";
import { ProductPropsType } from "../../../types";
import { getUser } from "../../../utils";
import { formatDistanceToNow, parseISO } from "date-fns";
import EmptyData from "../../tools/EmptyData";

const ProductReviewsContent = ({ product }: ProductPropsType) => {
  // Filter reviews for the specific product
  const productReviews = reviewsData.filter(
    (item) => item.productId === product.id
  );

  return (
    <>
      {productReviews.length !== 0 ? (
        <div>
          {productReviews.map((item) => (
            <div className="flex gap-5 mb-3" key={item.id}>
              <img
                src={`https://i.pravatar.cc/150?img=${item.userId}`}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-ass">
                  {getUser(item.userId)?.name}
                </h3>
                <span className="text-yellow-500">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </span>
                <p className="text-assLight">{item.reviews}</p>
                <div className="mt-2 flex items-center">
                  <span className="text-sm text-gray-600">
                    {formatDistanceToNow(parseISO(item.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default ProductReviewsContent;
