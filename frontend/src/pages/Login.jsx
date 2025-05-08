// src/pages/Login.jsx
import { useState } from 'react';
import { login } from '../api/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await login(form.email, form.password);
      alert('Login exitoso. Token guardado.');
      console.log('Token:', token);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" name="email" placeholder="Correo" onChange={handleChange} />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
      <button type="submit">Entrar</button>
    </form>
  );
}
