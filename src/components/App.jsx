// import css from './App.module.css';

// import { Contacts } from './Contacts/Contacts';

// export const App = () => {
//   return <Contacts />;
// };

//!===================================================

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contact'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signUp" element={<RegistrationPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
