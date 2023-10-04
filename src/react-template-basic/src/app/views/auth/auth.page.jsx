import React from 'react';
import './auth.styles.scss';
import AuthForm from './fragments/auth-form'

const AuthPage = () => {
    return (
        <div className="Auth">            
            <div className="title">Auth</div>
            <AuthForm></AuthForm>
        </div>
    );
}

export default AuthPage; 
