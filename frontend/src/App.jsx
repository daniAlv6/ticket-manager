import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
        <h1>Gestor de Tickets</h1>

        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/login" style={{ marginRight: '1rem' }}>Iniciar sesión</Link>
          <Link to="/register">Registrarse</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

