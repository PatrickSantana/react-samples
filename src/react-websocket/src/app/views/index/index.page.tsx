import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
//
import { RoutesPath as R } from '@routes/routes-path';
import logo from "@assets/img/image-1.jpg";
import './styles.scss';

const IndexPage: React.FC = () => {
  const title: string = 'Index';
  const ss = useRef();
  // let navigate = useNavigate();
  let text = "";

  (() => {
    //for (let i = 0; i < 1000; i++)
      //text += "1010101010101011 ";

  })()
  // setTimeout(() => {
  //   navigate(`/auth`);
  // }, 1);


  let style = {
    // background: logo,
    backgroundImage: logo,


  };

  return (
    <>
      <div className='index-page'>
        <div className='box'>

          <div className='title'>{title}</div>
          <div className='text'>
            {/* <span>{"Go - >"}</span> */}
            <a href={ R.HomePage }>{"Go - >"}</a>
          </div>
        </div>
      <div id='{ss}' style={style} className="background">{text}
        {/* <img src={logo} alt="" ></img> */}
      </div>
      </div>
    </>
  );
}
export default IndexPage;
