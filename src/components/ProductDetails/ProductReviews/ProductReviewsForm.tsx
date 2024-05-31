import { useForm } from "react-hook-form";
import { ProductPropsType } from "../../../types";
import { DevTool } from "@hookform/devtools";
import { Rating } from "@mui/material";
import { useState } from "react";
import { reviewsData } from "../../../data/dummy";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

interface IFromInputs {
  rating: number;
  reviews: string;
}

const ProductReviewsForm = ({ product }: ProductPropsType) => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<IFromInputs>();

  const [rating, setRating] = useState<number>(0);

  const formSubmit = (data: IFromInputs) => {
    // Ensure rating is at least 1
    if (rating < 1) {
      setError("rating", {
        type: "manual",
        message: "Rating must be required.",
      });
      return;
    }

    const formData = {
      ...data,
      rating: rating,
    };

    // Add the new review to the reviewsData array
    const newReview = {
      id: reviewsData.length + 1, // Generate a new ID based on the current length of the reviewsData array
      userId: auth?.user?.id ?? 0, // Assuming the userId is 10, this should be dynamic in a real application
      productId: product.id,
      reviews: formData.reviews,
      rating: formData.rating,
      createdAt: new Date().toISOString(), // Generate the current date and time
    };

    reviewsData.push(newReview);
    toast.success("New Reviews Added Succesfully");
    reset();
    setRating(0);
    console.log("Updated reviewsData:", reviewsData);
  };

  return (
    <div className="py-16">
      <div className="grid">
        <h4 className="text-2xl font-semibold capitalize mb-5 text-ass">
          Information
        </h4>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-5">
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(_event, newValue) => {
                const value = newValue || 0;
                setRating(value);
                if (value >= 1) {
                  clearErrors("rating");
                }
              }}
            />
            {errors.rating && (
              <p className="text-red-700 mt-1">{errors.rating.message}</p>
            )}
          </div>
          <div className="mb-5">
            <textarea
              {...register("reviews", { required: "Reviews are required." })}
              placeholder="Add Note"
              className={`input-class ${
                errors.reviews ? "border-red-600" : "border-gray-200"
              }`}
            />
            {errors.reviews && (
              <p className="text-red-700 mt-1">{errors.reviews.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary2 bg-opacity-80 hover:bg-opacity-100 text-white px-5 py-2 rounded"
          >
            Submit
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default ProductReviewsForm;
