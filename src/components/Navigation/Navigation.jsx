import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css['HeaderNav']}>
      <div className={css['HeaderPageHome']}>
        <NavLink to="/">Home</NavLink>
      </div>

      {isLoggedIn && (
        <NavLink className="" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
