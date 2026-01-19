import Axios from "../utils/Axios";

const API = "/addresses"

export const addUserAddress = async (payload) => {
    const response = await Axios.post(`${API}/add-address`, payload);
    return response.data;
}

export const getUserAddress = async () => {
    const response = await Axios.get(`${API}/get-address`);
    return response.data;
}


export const deleteUserAddress = async (addressId) => {
    const response = await Axios.delete(`${API}/delete-address/${addressId}`);
    return response.data;
}

export const defaultUserAddress = async (addressId) => {
    const response = await Axios.get(`${API}/set-default-address/${addressId}`);
    return response.data;
}


