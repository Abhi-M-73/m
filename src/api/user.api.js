import Axios from "../utils/Axios";

const API = "/users"

export const userRegister = async (payload) => {
    const response = await Axios.post(`${API}/register`, payload);
    return response.data;
}

export const userLogin = async (payload) => {
    const response = await Axios.post(`${API}/login`, payload);
    return response.data;
}

export const updateProfile = async (payload) => {
    const response = await Axios.put(`${API}/update-profile`, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}

export const buyPlanPackage = async (payload) => {
    const response = await Axios.post(`${API}/buy-package`, payload);
    return response.data;
}

export const makeInvestment = async (payload) => {
    const response = await Axios.post(`${API}/create-investment`, payload);
    return response.data;
}

export const getInvestmentHistory = async () => {
    const response = await Axios.get(`${API}/get-investment-history`);
    return response.data;
}

export const userDeposit = async () => {
    const response = await Axios.post(`${API}/create-deposit`);
    return response.data;
}



export const getDirectreferralIncome = async () => {
    const response = await Axios.get(`${API}/get-directreferralIncome-history`);
    return response.data;
}

export const getLevelIncome = async () => {
    const response = await Axios.get(`${API}/get-levelincome-history`);
    return response.data;
}

export const getRoiIncome = async (investmentId) => {
    const response = await Axios.get(`${API}/get-roi-history/${investmentId}`);
    return response.data;
}

export const getUserProfile = async () => {
    const response = await Axios.get(`${API}/get-profile`);
    return response.data;
}

export const raiseTicket = async (payload) => {
    const response = await Axios.post(`${API}/raise-ticket`, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}

export const getRaiseTicketHistory = async () => {
    const response = await Axios.get(`${API}/get-raise-ticket-history`);
    return response.data;
}

export const deleteRaiseTicket = async (ticketId) => {
    const response = await Axios.delete(`${API}/delete-raise-ticket/${ticketId}`);
    return response.data;
}