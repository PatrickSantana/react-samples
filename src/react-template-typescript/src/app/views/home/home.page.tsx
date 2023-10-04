import React from 'react';
import { useNavigate } from "react-router-dom";
//
import './home.styles.scss';

const HomePage: React.FC = () => {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate(`/auth`);
  }, 1);

  const title: string = 'Home';
  return (
    <div>{title}</div>
    // <Redirect to="/somewhere/else" />
  );
}
export default HomePage;
