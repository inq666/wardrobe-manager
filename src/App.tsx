import React from 'react';
import { Route } from 'react-router-dom'
import CollectOutfit from './containers/OutfitCreator/OutfitCreator';
import ClothesList from './containers/ClothesList/Clothes'
import HomePage from './containers/HomePage/HomePage';
import Outfits from './containers/Outfits/Outfits';
import Layout from './hoc/Layout/Layout';
import './_app.scss';

const App: React.FC = () => {
  return (
    <Layout>
      <Route path="/" exact component={HomePage} />
      <Route path="/allClothes" component={ClothesList} />
      <Route path="/collectOutfit" component={CollectOutfit} />
      <Route path="/outfits" component={Outfits} />
    </Layout>
  );
};

export default App;
