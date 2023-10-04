import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react'
//
import './styles.scss';

const DashboardPage: React.FC = () => {
  const TITLE: string = 'Template';

  return (
    <>
      <div className='dashboard-page'>
        <div>{TITLE}</div>
        <div className='content'>
          <Button primary>Click Here</Button>
        </div>
      </div>
    </>
  );
}
export default DashboardPage;
