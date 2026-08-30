import axios from 'axios';

const axiosOptions = {
  baseURL: 'http://localhost:3000/api',
};

const apiInstance = axios.create(axiosOptions);

export const createEvent = (body) => apiInstance.post('/events', body);
