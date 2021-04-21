import React from 'react';
import footer from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={footer.bg}>
      <section className={footer.wrap}>Footer</section>
    </div>
  );
};

export default Footer;
