export const getDiscountPrice = (price: number, discountRate: number) => {
  return (price - (price * discountRate) / 100).toFixed(2);
};
