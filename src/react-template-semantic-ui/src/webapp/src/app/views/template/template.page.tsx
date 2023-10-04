import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react'
//
import './styles.scss';

const TemplatePage: React.FC = () => {
  const TITLE: string = 'Template';

  return (
    <>
      <div className='template-page'>
        <div>{TITLE}</div>
        <div className='content'>
          <Button primary>Click Here</Button>
        </div>
      </div>
    </>
  );
}
export default TemplatePage;
