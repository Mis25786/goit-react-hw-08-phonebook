import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './../Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <ul className={css['Header']}>
        <div className={css['HeaderPage']}>
          <li className={css['HeaderPageHome']}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css['HeaderPageContacts']}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </div>
        <div className={css['HeaderRegister']}>
          <button className={css['HeaderRegisterLogin']}>
            <NavLink to="/login">Log In</NavLink>
          </button>
          <button className={css['HeaderRegisterSignUp']}>
            <NavLink to="/signUp">Register</NavLink>
          </button>
        </div>
      </ul>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Layout;

// import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { Header, StyledLink } from './Layout.styled';
// import Loader from './../Loader/Loader';
// import { Suspense } from 'react';

// const Layout = () => {
//   return (
//     <div>
//       <Header>
//         <li>
//           <StyledLink to="/">Home</StyledLink>
//         </li>
//         <li>
//           <StyledLink to="/movies">Movies</StyledLink>
//         </li>
//       </Header>
//       <main>
//         <Suspense fallback={<Loader />}>
//           <Outlet />
//         </Suspense>
//       </main>
//       <ToastContainer autoClose={2000} />
//     </div>
//   );
// };

// export default Layout;
