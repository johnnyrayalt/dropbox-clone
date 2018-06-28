import React from 'react';

function TryDropbox() {
  return(
    <div className='container'>
      <div className='border'>
        <p className='text'>Try Dropbox Business</p>
      </div>
      <style jsx>
        {`
          .text {
            color:#2895F1;
            padding: 8px 16px;
            margin:0;
            font-size:13px;
            font-weight:600;
          }
          .border {
            border:1px solid #2895F1;
            border-radius:5px;
          }
          `}
      </style>
    </div>
  );
}

export default TryDropbox;
