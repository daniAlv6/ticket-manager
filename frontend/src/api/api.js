import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

// Guarda el token en localStorage
export function saveToken(token) {
  localStorage.setItem('authToken', token);
}

// Obtiene el token guardado
export function getToken() {
  return localStorage.getItem('authToken');
}

// Crea una instancia de Axios con el token (si existe)
export function apiClient() {
  const token = getToken();
  return axios.create({
    baseURL: API_BASE,
    headers: token
      ? { Authorization: `Bearer ${token}` }
      : {}
  });
}

// Login: lee correctamente el campo access_token
export async function login(login, password) {
  const response = await axios.post(`${API_BASE}/login`, { login, password });
  const token = response.data.access_token;  // ← antes tenías response.data.token
  saveToken(token);
  return token;
}

// Obtener tickets
export async function getTickets() {
  const client = apiClient();
  const response = await client.get('/tickets');
  return response.data;
}

// Saber si el usuario está logueado o no
export function isLoggedIn() {
  return !!getToken();
}

// Logout
export function logout() {
  localStorage.removeItem('authToken');
}



