import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './../Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

// import css from './Layout.module.css';

const Layout = () => {
  return (
    <main>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <ToastContainer autoClose={2000} />
    </main>
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
