import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Dashboard } from './pages/home/index';
import { AuthPage } from './pages/auth';
import { useGlobalContext } from './provider';
import { Loading } from './components/Loading';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';

export const Routers = () => {
  const [state] = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Dashboard />} />
        <Route path='/auth/*' element={<AuthPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>

      <NotificationContainer />
      <Loading state={state.loading} opacity={0.9} />
    </BrowserRouter>
  );
};
