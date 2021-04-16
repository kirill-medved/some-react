import React from 'react';

type CardProps = {
  price?: number;
  title?: string;
  imageUrl?: string;
  gender?: string;
};

const Card = ({ price, title, imageUrl, gender }: CardProps) => {
  return (
    <div>
      <div>{price}</div>
      <div>{title}</div>
      <div>{imageUrl}</div>
      <div>{gender}</div>
    </div>
  );
};

export default Card;

export {};
