import { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Asegúrate que esto apunta a tu CSS animado

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
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirmar contraseña"
            value={form.password_confirmation}
            onChange={handleChange}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

