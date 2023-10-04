import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
//
import './styles.scss';

const HomePage: React.FC = () => {
  const TITLE: string = 'Home';

  return (
    <>
      <div className='home-page'>
        <div>{TITLE}</div>
        <div className='content'>
          <button className="ui button">Click Here</button>
          <Button primary>Click Here</Button>
        </div>
      </div>
    </>
  );
}
export default HomePage;
