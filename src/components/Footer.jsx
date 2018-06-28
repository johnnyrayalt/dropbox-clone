import React from 'react';
import FooterNavHeaders from './FooterNavHeaders';
import FooterNavLanguage from './FooterNavLanguage';

const headerTitles = [
  {
    title: 'Dropbox',
    link: [
      'Install',
      'Mobile',
      'Pricing',
      'Business',
      'Enterprise'
    ]
  },
  {
    title: 'About us',
    link: [
      'Dropbox Blog',
      'About',
      'Branding',
      'News',
      'Jobs'
    ]
  },
  {
    title: 'Support',
    link: [
      'Help Center',
      'Contact us',
      'Copyright',
      'Cookies',
      'Privacy & Terms'
    ]
  },
  {
    title: 'Community',
    link: [
      'Referalls',
      'Forum',
      'Twitter',
      'Facebook',
      'Developers'
    ]
  }
];

function Footer() {
  return(
    <div className='container'>
      <div className='footerTopMargin'></div>
      {headerTitles.map((header, index) =>
        <FooterNavHeaders className='footerNavContainer' title={header.title}
          link={header.link}
          key={index}/>
      )}
        <FooterNavLanguage/>
      <style jsx>
        {`
          .container {
            margin: auto;
            max-width: 900px;
          }

          .footerTopMargin {
            border-top: 1px solid #d0d4d9;
            margin: 2em 0;
            width:100%;
            height:0;
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
