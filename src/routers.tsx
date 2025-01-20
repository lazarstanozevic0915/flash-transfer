import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Dashboard } from './pages/home/index';
import { AuthPage } from './pages/auth';
import { useGlobalContext } from './provider';
import { Loading } from './components/Loading';

export const Routers = () => {
  const [state] = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Dashboard />} />
        <Route path='/auth/*' element={<AuthPage />} />
      </Routes>

      <NotificationContainer />
      <Loading state={state.loading} opacity={0.9} />
    </BrowserRouter>
  )
}