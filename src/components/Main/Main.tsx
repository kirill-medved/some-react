import React from 'react';
import main from './Main.module.css';
import { IAvatar } from '../../index';
import CardsContainer from './Cards/CardsContainer';

interface MainProps {
  avatar: IAvatar;
}

const Main = ({ avatar }: MainProps): JSX.Element => {
  return (
    <div className={main.bg}>
      <section className={main.wrap}>
        Content
        <img src={avatar.image} alt={avatar.alt} />
      </section>
      <div>
        <CardsContainer />
      </div>
    </div>
  );
};

export default Main;
