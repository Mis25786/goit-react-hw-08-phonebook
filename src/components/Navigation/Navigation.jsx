import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <nav className={css['HeaderNav']}>
      <div className={css['HeaderPageHome']}>
        <NavLink to="/">Home</NavLink>
      </div>
      {/* <div className={css['HeaderContacts']}>
        <NavLink to="/contacts">Contacts</NavLink>
      </div> */}
      {isLoggedIn && (
        <NavLink csclassName="" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
