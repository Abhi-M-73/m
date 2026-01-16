import Axios from "../utils/Axios";

const API = "/admin"

export const adminLogin = async (payload) => {
    const response = await Axios.post(`${API}/login`, payload);
    return response.data;
}

export const getAllTeam = async () => {
    const response = await Axios.get(`${API}/get-all-users`);
    return response.data;
}

export const toggleLoginBlock = async (userId) => {
    const response = await Axios.get(`${API}/block-user/${userId}`);
    return response.data;
}

export const getUserByUsername = async (payload) => {
    const response = await Axios.post(`${API}/get-user-for-topup`, payload);
    return response.data;
}

export const topupUser = async (payload) => {
    const response = await Axios.post(`${API}/admin-topup`, payload);
    return response.data;
}

export const getTopupHistory = async () => {
    const response = await Axios.get(`${API}/get-topup-history`);
    return response.data;
}