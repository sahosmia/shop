





export const getDiscountPrice = (price: number, discountRate: number) => {
  return (price - (price * discountRate) / 100).toFixed(2);
};


export const getNextID = (arr: { id: number }[]): number => {
  if (arr.length === 0) {
    return 1;
  }

  const maxID = Math.max(...arr.map((item) => item.id));
  return maxID + 1;
};



