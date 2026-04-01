export type ProductCardType = {
  id: number;
  productName: string;
  data: ProductItem[];
};

export type ProductItem = {
  id: number;
  cardName: string;
  cardImage: string;
  cardReview: string;
  noOfStar: number;
  newRs: string;
  oldRs: string;
};