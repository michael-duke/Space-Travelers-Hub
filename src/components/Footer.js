import React from 'react';

const Footer = () => (
  <footer className="footer absolute bottom-0 flex justify-center w-full">
    <div className="footer__container">
      <p className="footer__text">
        <span className="font-bold">Space Travelers&apos; Hub</span>
        {' '}
        is a project made by
        <span className="font-bold text-purple-600"> Praises Musa and Michael Mesfin.</span>
      </p>
      <p className="footer__text text-blue-gray-500">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        <span className="font-semibold text-blue-gray-600">Space Travelers&apos; Hub</span>
      </p>
    </div>
  </footer>
);

export default Footer;
