import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3000/posts";

export const getData = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createData = async (newPost: any) => {
  try {
    const res = await axios.post(BASE_URL, newPost);
     toast.success("Added Successfully!");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (id: any, updatedPost: any) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, updatedPost);
       toast.success("Updated Successfully!");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id: any) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    toast.error("Data Deleted!");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
