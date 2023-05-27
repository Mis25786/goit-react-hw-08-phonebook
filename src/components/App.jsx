import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Loader from './Loader';

const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/LoginPage'));
const Registration = lazy(() => import('./pages/RegistrationPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <>
      <p> 'Fetching user data...'</p>
      <Loader />
    </>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="login"
          element={<PublicRoute component={<Login />} redirectTo="/contacts" />}
        />
        <Route
          path="signUp"
          element={
            <PublicRoute component={<Registration />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
