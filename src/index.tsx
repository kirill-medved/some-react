import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export interface IUser {
  firstName: string;
  lastName: string;
}

export interface IAvatar {
  image: string;
  alt: string;
}

export interface IStore {
  user: IUser;
  avatar: IAvatar;
}

const store: IStore = {
  user: {
    firstName: 'Kirill',
    lastName: 'Medved',
  },
  avatar: {
    image:
      'https://www.meme-arsenal.com/memes/d0b7380c554b78d0420eacfc37424cd5.jpg',
    alt: 'user avatar',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App user={store.user} avatar={store.avatar} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
