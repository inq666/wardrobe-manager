import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import CollectOutfit from './components/collect-outfit/СollectOutfit';
import ClothesList from './components/clothes-list/ClothesList';
import HomePage from './components/home-page/HomePage';
import Outfits from './components/outfits/Outfits';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/" exact component={HomePage} />
      <Route path="/allClothes" component={ClothesList} />
      <Route path="/collectOutfit" component={CollectOutfit} />
      <Route path="/outfits" component={Outfits} />
    </React.Fragment>
  );
};

export default App;
