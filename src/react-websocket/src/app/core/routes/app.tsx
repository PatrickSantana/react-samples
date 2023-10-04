import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//
import '@styles/global.scss';
import { RoutesPath as R }  from './routes-path'
import MainLayout from "@components/layouts/main-layout";
import IndexPage from '@views/index/index.page';
import HomePage from "@views/home/home.page";
import AuthPage from "@views/auth/auth.page";
//import { Redirect } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path={R.AutPage} element={<AuthPage />} />
          <Route path={R.HomePage} element={<HomePage />} />

          {/* NotFound */}
          <Route path="*" element={<IndexPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
