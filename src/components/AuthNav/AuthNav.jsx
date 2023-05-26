import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css['HeaderRegister']}>
      <button className={css['HeaderRegisterLogin']}>
        <NavLink to="/login">Log In</NavLink>
      </button>
      <button className={css['HeaderRegisterSignUp']}>
        <NavLink to="/signUp">Register</NavLink>
      </button>
    </div>
  );
};
