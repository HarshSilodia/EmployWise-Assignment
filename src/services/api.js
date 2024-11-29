import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',
});

// Add token to headers for authenticated requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});


// Create an Axios instance
const Login = axios.create({
  baseURL: 'https://reqres.in/api',
});

// API call for login
export const login = (credentials) => Login.post('/login', credentials);

// export const login = (credentials) => API.post('/login', credentials);
export const fetchUsers = (page) => API.get(`/users?page=${page}`);
export const updateUser = (id, user) => API.put(`/users/${id}`, user);
export const deleteUser = (id) => API.delete(`/users/${id}`);