import React from 'react';
import BodySignIn from './BodySignIn';
import boulder from '../assets/img/boulder.png';

function Body() {
  return(
    <div className='container'>
      <img className='left' src={boulder}/>
      <BodySignIn class='right'/>
      <style jsx>
        {`
          .container {
            padding-top:120px;
            width:900px;
            margin:auto;
            display: flex;
            justify-content:space-around;
          }
          .left {
            margin:auto:
            width:48%;
          }
          .right {
              margin:auto;
              width:48%;
          }
          `}
      </style>
    </div>
  );
}

export default Body;
