import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <NavLink to="/login" type="button" className="btn btn-outline-primary">
        Log In
      </NavLink>

      <NavLink to="/signUp" type="button" className="btn btn-outline-primary">
        Register
      </NavLink>
    </div>
  );
};
