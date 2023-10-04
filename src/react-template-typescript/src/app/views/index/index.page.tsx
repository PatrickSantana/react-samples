import React from 'react';
import { useNavigate } from "react-router-dom";
//
import './index.styles.scss';

const IndexPage: React.FC = () => {
  // let navigate = useNavigate();

  // setTimeout(() => {
  //   navigate(`/auth`);
  // }, 1);

  const title: string = 'Index';
  return (
    <div className='IndexPage'>
      <div className='title'>{title}</div>
    </div>
  );
}
export default IndexPage;
