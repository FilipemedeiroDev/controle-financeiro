import axios from 'axios';
import { getItem } from '../utils/storage';

const instance = axios.create({
    baseURL: 'https://controle-financeiro-production.up.railway.app',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    const token = getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

export default instance;