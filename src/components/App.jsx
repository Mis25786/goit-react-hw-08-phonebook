import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';

const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/LoginPage'));
const Registration = lazy(() => import('./pages/RegistrationPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log('isRefreshing :>> ', isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p> 'Fetching user data...'</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<Registration />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
