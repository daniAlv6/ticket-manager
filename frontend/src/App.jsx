import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TicketList from './pages/TicketList';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">
          <h1>Gestor de Tickets</h1>
          <nav>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Registrarse</Link>
          </nav>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


