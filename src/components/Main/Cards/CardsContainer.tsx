import React from 'react';
import { mockedApiCall } from '../../../api/mockedApi';
import Card from './Card';
import cardsContainer from './CardsContainer.module.css';

type CardProps = {
  id?: number;
  price?: number;
  title?: string;
  imageUrl?: string;
  gender?: string;
};

class CardsContainer extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount(): void {
    this.getCards();
  }

  getCards: () => void = async () => {
    const cards = await mockedApiCall();
    this.setState({ cards });
  };

  render() {
    const { cards } = this.state;
    const cardsElements =
      cards.length > 0
        ? cards.map(({ id, price, title, imageUrl, gender }: CardProps) => (
            <Card
              price={price}
              title={title}
              imageUrl={imageUrl}
              gender={gender}
              key={id}
            />
          ))
        : 'No cards yet';
    return <div className={cardsContainer.gallery}>{cardsElements}</div>;
  }
}

export default CardsContainer;
