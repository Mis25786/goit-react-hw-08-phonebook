import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="btn-group" role="group" aria-label="Basic example">
      <NavLink to="/" type="button" className="btn btn-outline-primary">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          type="button"
          className="btn btn-outline-primary"
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
