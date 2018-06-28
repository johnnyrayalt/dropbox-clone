import React from 'react';

function DownloadDropbox() {
  return(
    <div className='container'>
      <p className='text'>Download the app</p>
      <style jsx>
        {`
          .text {
            color:#2895F1;
            font-size:14px;
          }

          .text:hover {
            text-decoration:underline;
            cursor:pointer;
          }
          `}
      </style>
    </div>
  );
}

export default DownloadDropbox;
