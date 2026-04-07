import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getAllProductData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/get_all_products`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDataByName = async (productName: string | '' | undefined) => {
  try {
    const res = await axios.get(`${BASE_URL}/get_all_products`);
    const selectedProduct = res.data.find(
      (item: any) => item.productName === productName
    );
    return selectedProduct?.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addProductToCategory = async (
  productName: string,
  payload: any
) => {
  try {
    const res = await axios.get(`${BASE_URL}/get_all_products`);
    const products = res.data;
    
    const selectedProduct = products.find(
      (item: any) => item.productName === productName
    );
    const newItem = {
      id: Date.now(), 
      ...payload,
    };
    selectedProduct.data.push(newItem);

    await axios.put(
      `${BASE_URL}/get_all_products/${selectedProduct.id}`,
      selectedProduct
    );

    console.log("Product added successfully");
  } catch (error) {
    console.log(error);
  }
};