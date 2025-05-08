// src/pages/Register.jsx
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/register', form);
      alert('Usuario registrado con éxito. Ahora inicia sesión.');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
      <input type="email" name="email" placeholder="Correo" onChange={handleChange} />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
      <input type="password" name="password_confirmation" placeholder="Confirmar contraseña" onChange={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  );
}
