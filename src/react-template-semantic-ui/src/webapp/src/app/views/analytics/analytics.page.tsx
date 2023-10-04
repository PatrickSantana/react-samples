import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react'
//
import './styles.scss';

const AnalyticsPage: React.FC = () => {
  const TITLE: string = 'Analytics';

  return (
    <>
      <div className='analytics-page'>
        <div>{TITLE}</div>
        <div className='content'>
          <Button primary>Click Here</Button>
        </div>
      </div>
    </>
  );
}
export default AnalyticsPage ;
