import React from 'react';
import './auth.styles.scss';
import AuthFormComponent from './components/auth-form.component'

const AuthPage = () => {
  const title: string = 'Auth';

  return (
    <div className="Auth">
      <div className="title">{title}</div>
      <AuthFormComponent></AuthFormComponent>
    </div>
  );
}

export default AuthPage;
