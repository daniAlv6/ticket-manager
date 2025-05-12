import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logout } from '../api/api';

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ marginBottom: '1rem' }}>
      {!isLoggedIn() ? (
        <>
          <Link to="/login" style={{ marginRight: '1rem' }}>Iniciar sesión</Link>
          <Link to="/register">Registrarse</Link>
        </>
      ) : (
        <>
          <Link to="/tickets" style={{ marginRight: '1rem' }}>Mis Tickets</Link>
          <button
            style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </>
      )}
    </nav>
  );
}
