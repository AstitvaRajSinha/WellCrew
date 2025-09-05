import axios from 'axios';

const API_URL = 'https://wellcrew.onrender.com/api/auth'; 

// configure axios globally
axios.defaults.withCredentials = true;

export const login = (data) => axios.post(`${API_URL}/login`, data, { withCredentials: true });
export const signup = (data) => axios.post(`${API_URL}/signup`, data, { withCredentials: true });
export const sendOtp = (data) => axios.post(`${API_URL}/sendotp`, data, { withCredentials: true });
export const test = () => axios.get(`${API_URL}/test`, { withCredentials: true });
export const profile = () => axios.get(`${API_URL}/profile`, { withCredentials: true });
export const logout = () => axios.get(`${API_URL}/logout`, { withCredentials: true });
export const verifyToken = () => axios.get(`${API_URL}/verify-token`, { withCredentials: true });
export const getposts = () => axios.get(`${API_URL}/posts`, { withCredentials: true });
export const setposts = (data) => axios.post(`${API_URL}/posts`, data, { withCredentials: true });
