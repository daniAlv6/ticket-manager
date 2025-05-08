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
  return axios.create({
    baseURL: API_BASE,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}

// Login
export async function login(email, password) {
  const response = await axios.post(`${API_BASE}/login`, { email, password });
  const token = response.data.token;
  saveToken(token);
  return token;
}

// Obtener tickets
export async function getTickets() {
  const client = apiClient();
  const response = await client.get('/tickets');
  return response.data;
}
