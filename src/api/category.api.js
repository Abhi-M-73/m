import Axios from "../utils/Axios";

const API = "/categories";

export const getAllCategories = async () => {
    const response = await Axios.get(`${API}/get-categories`);
    return response.data;
};

export const createCategory = async (payload) => {
    const response = await Axios.post(`${API}/add-category`, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const toggleCategory = async (id) => {
    const response = await Axios.get(`${API}/toggle-category/${id}`);
    return response.data;
};

export const deleteCategory = async (id) => {
    const response = await Axios.delete(`${API}/delete-category/${id}`);
    return response.data;
};