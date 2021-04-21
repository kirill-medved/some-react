import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { IUser, IAvatar } from './index';

interface AppProps {
  user: IUser;
  avatar: IAvatar;
}

function App({ user, avatar }: AppProps): JSX.Element {
  return (
    <div>
      <Header user={user} />
      <Main avatar={avatar} />
      <Footer />
    </div>
  );
}

export default App;
