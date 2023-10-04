import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//
import '../core/styles/global.scss';
import AuthPage from "../views/auth/auth.page";
import HomePage from "../views/home/home.page";
import Layout from "../core/components/layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="*" element={<HomePage />} />
                    {/* NotFound */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;