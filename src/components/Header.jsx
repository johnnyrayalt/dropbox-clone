import React from 'react';
import TryDropbox from './TryDropbox';
import DownloadDropbox from './DownloadDropbox';
import box from '../assets/img/box.svg';
import text from '../assets/img/text.svg';

function Header() {
  return(
    <div className='container'>
      <div className='containerNav'>
        <TryDropbox class='vAlign try'/>
        <div className='logoContainer'>
          <img className='box' src={box}/>
          <img className='textLogo' src={text}/>
        </div>
        <DownloadDropbox class='vAlign download'/>
      </div>
      <style jsx>
        {`
          .container {
            border-bottom: 1px solid #d0d4d9;
            box-shadow:0px 1px 1px #d0d4d9;
            width:100%;
            position:fixed;
            z-index:99;
            top:0;
            left:0;
          }

          .containerNav {
            display: flex;
            justify-content: space-between;
            max-width:900px;
            margin:auto;
          }

          .logoContainer, .box, .textLogo, .container, .containerNav, .try, .download {
            vertical-align:middle;
          }

          .containerNav {
            padding-top:2.5%;
          }

          .logoContainer {
            height:46px;
            margin: 0 5% 20px 5%;
          }

          .box {
            width: 46px;
            height: 46px;
            margin: 0 5px;
          }

          .textLogo {
            width: 120px;
            height:34px;
            margin: 0 5px;
          }
          `}
      </style>
    </div>
  );
}

export default Header;
