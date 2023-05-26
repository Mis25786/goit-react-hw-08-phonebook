import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
// const Contacts = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/LoginPage'));
const Registration = lazy(() => import('./pages/RegistrationPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<Registration />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
