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
  noOfStart: number;
  newRs: string;
  oldRs: string;
};