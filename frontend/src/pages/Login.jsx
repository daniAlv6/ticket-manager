import { useState } from 'react';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Aquí importa tu CSS visual (convertido de SASS)

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await login(form.email, form.password);
      console.log('Token:', token);
      navigate('/tickets');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Correo" value={form.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} />
          <button type="submit">Entrar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

