// src/api/api.js

import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

/**
 * Guarda el token en localStorage bajo la clave 'authToken'
 * @param {string} token
 */
export function saveToken(token) {
  localStorage.setItem('authToken', token);
}

/**
 * Recupera el token guardado en localStorage
 * @returns {string|null}
 */
export function getToken() {
  return localStorage.getItem('authToken');
}

/**
 * Crea una instancia de Axios configurada con:
 *  - baseURL apuntando a nuestra API
 *  - Authorization en headers.common si hay token
 */
export function apiClient() {
  const token = getToken();
  const client = axios.create({
    baseURL: API_BASE,
    // no definimos aquí headers para Authorization
  });

  if (token) {
    // Aseguramos que el header vaya en defaults.headers.common,
    // así Axios lo enviará en TODAS las peticiones.
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return client;
}

/**
 * Llama al endpoint /login para obtener un token,
 * lo guarda en localStorage y lo retorna.
 * @param {string} login – email o nombre de usuario
 * @param {string} password
 */
export async function login(login, password) {
  const response = await axios.post(`${API_BASE}/login`, { login, password });
  // Laravel devuelve el token en access_token
  const token = response.data.access_token;
  saveToken(token);
  console.log('▶️ login(): access_token =', token);
  console.log('▶️ localStorage.authToken =', localStorage.getItem('authToken'));
  return token;
}

/**
 * Devuelve la lista de tickets usando la instancia autenticada
 * @returns {Promise<Array>}
 */
export async function getTickets() {
  const client = apiClient();
  const response = await client.get('/tickets');
  return response.data;
}

/**
 * Comprueba si existe un token en localStorage
 * @returns {boolean}
 */
export function isLoggedIn() {
  return !!getToken();
}

/**
 * Elimina el token de localStorage (logout)
 */
export function logout() {
  localStorage.removeItem('authToken');
}
