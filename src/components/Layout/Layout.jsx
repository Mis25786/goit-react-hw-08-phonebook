import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './../Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Layout;
