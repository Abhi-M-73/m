import Axios from "../utils/Axios";

const API = "/products";

export const createProduct = async (payload) => {
    const response = await Axios.post(`${API}/create-product`, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const getAllProducts = async () => {
    const response = await Axios.get(`${API}/get-products-for-admin`);
    return response.data;
};

export const getAllUserProducts = async ({page=1, limit=12}) => {
    const response = await Axios.get(`${API}/get-products?page=${page}&limit=${limit}`);
    return response.data;
};

export const getProductsByCategory = async (id) => {
    const response = await Axios.get(`${API}/get-all-product/${id}`);
    return response.data;
};

export const updateProduct = async ({id, payload}) => {
    const response = await Axios.put(`${API}/update-product/${id}`, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await Axios.delete(`${API}/delete-product/${id}`);
    return response.data;
};