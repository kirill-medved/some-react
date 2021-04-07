import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Store } from './index';

interface AppProps {
  store: Store;
}

function App({ store }: AppProps): JSX.Element {
  return (
    <div>
      <Header user={store.user} />
      <Main avatar={store.avatar} />
      <Footer />
    </div>
  );
}

export default App;
