import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '@/pages/Loading';

const Login = lazy(() => import('@/pages/Login'));
const Error = lazy(() => import('@/pages/Error'));
const Home = lazy(() => import('@/pages/Home'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
