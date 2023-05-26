import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './../Loader/Loader';
import { useAuth } from './../hooks/useAuth';
import css from './Layout.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

const Layout = () => {
  // const { isLoggedIn } = useAuth(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);

  return (
    <div>
      <div className={css['Header']}>
        <Navigation />
        <AuthNav />
      </div>
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
