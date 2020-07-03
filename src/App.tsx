import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import CollectOutfit from './components/СollectOutfit';
import AllClothes from './components/AllClothes';
import HomePage from './components/HomePage';
import Outfits from './components/Outfits';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/" exact component={HomePage} />
      <Route path="/allClothes" component={AllClothes} />
      <Route path="/collectOutfit" component={CollectOutfit} />
      <Route path="/outfits" component={Outfits} />
    </React.Fragment>
  );
};

export default App;
