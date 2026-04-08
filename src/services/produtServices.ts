import axios, { all } from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3000";

export const getAllProductData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/get_all_products`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDataByName = async (
  productName: string | "" | undefined,
) => {
  try {
    const res = await axios.get(`${BASE_URL}/get_all_products`);
    const selectedProduct = res.data.find(
      (item: any) => item.productName === productName,
    );
    return selectedProduct?.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addProductToCategory = async (
  productName: string,
  payload: any,
) => {
  try {
    const res = await axios.get(`${BASE_URL}/get_all_products`);
    const products = res.data;

    const selectedProduct = products.find(
      (item: any) => item.productName === productName,
    );
    const newItem = {
      id: Date.now(),
      ...payload,
    };
    selectedProduct.data.push(newItem);

    await axios.put(
      `${BASE_URL}/get_all_products/${selectedProduct.id}`,
      selectedProduct,
    );

    console.log("Product added successfully");
  } catch (error) {
    console.log(error);
  }
};

export const addNewUser = async (newUser: any) => {
  try {
    await axios.post("http://localhost:3000/users", newUser);
    toast.success("Registered Successfully!", {
      className: "custom-toast",
    });
  } catch (error) {
    console.log(error);
  }
};

export const isUserExit = async (name: string, password: string) => {
  try {
    const allUsers = await axios.get(`${BASE_URL}/users`);
    console.log("All", allUsers);
    const user = allUsers.data.find(
      (u: any) => u.username === name && u.password === password,
    );

    return !!user;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllUsers = async () => {
  try {
    const allUsers = await axios.get(`${BASE_URL}/users`);
    console.log("All", allUsers);

    return allUsers.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const removeUser = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    console.log("User deleted:", response.data);
    toast.success("Deleted Successfully!", {
      className: "custom-toast",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
