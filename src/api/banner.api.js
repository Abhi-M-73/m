import Axios from "../utils/Axios";

const API = "/banners";

export const createBanner = async (payload) => {
    const response = await Axios.post(`${API}/create-banner`, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const getAllBanners = async () => {
    const response = await Axios.get(`${API}/get-banners`);
    return response.data;
};

export const getAllAdminBanners = async () => {
    const response = await Axios.get(`${API}/get-admin-banners`);
    return response.data;
};

export const toggleBannerStatus = async (id) => {
    const response = await Axios.get(`${API}/toggle-banner/${id}`);
    return response.data;
};

export const deleteBanner = async (id) => {
    const response = await Axios.delete(`${API}/delete-banner/${id}`);
    return response.data;
};