import React from 'react';
import TryDropbox from './TryDropbox';
import DownloadDropbox from './DownloadDropbox';
import box from '../assets/img/box.svg';
import text from '../assets/img/text.svg';

function Header() {
  return(
    <div className='container'>
        <TryDropbox/>
        <div className='logoContainer'>
          <img className='box' src={box}/>
          <img className='text' src={text}/>
        </div>
        <DownloadDropbox/>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            margin: 0 5% 0 5%;
          }

          .box {
            width: 46px;
            height: 46px;
          }

          .text {
            width: 120px;
            height:34px;
          }
          `}
      </style>
    </div>
  );
}

export default Header;
