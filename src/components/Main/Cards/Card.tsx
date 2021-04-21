import React from 'react';
import card from './Card.module.css';

type CardProps = {
  price?: number;
  title?: string;
  imageUrl?: string;
  gender?: string;
};

const Card = ({ price, title, imageUrl, gender }: CardProps) => {
  return (
    <div className={card.card}>
      <img src={imageUrl} alt={title} className={card.img} />
      <div>price: {price}</div>
      <div>title: {title}</div>
      <div>gender: {gender}</div>
    </div>
  );
};

export default Card;

export {};
