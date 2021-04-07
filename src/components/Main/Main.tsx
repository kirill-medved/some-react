import React from 'react';
import main from './Main.module.css';
import { Avatar } from '../../index';

interface MainProps {
  avatar: Avatar;
}

const Main = ({ avatar }: MainProps): JSX.Element => {
  return (
    <div className={main.bg}>
      <section className={main.wrap}>
        Content
        <img src={avatar.image} alt={avatar.alt} />
      </section>
    </div>
  );
};

export default Main;
