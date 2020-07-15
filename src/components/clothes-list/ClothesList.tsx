import React, { useState, useEffect } from 'react';
import ClothesItem from '../clothes-item/ClothesItem';
import AddClothes from '../add-clothes/AddClothes';
import axios from 'axios';
import './_clothes-list.scss';


const ClothesList: React.FC = () => {

  useEffect(() => {
    const getClothesData = async () => {
      const response = await axios.get('https://wardrobe-manager-6dca3.firebaseio.com/clothes.json')
      console.log(response.data)
      for (let item of Object.entries(response.data)) {
        console.log(item)
      }
    }
    getClothesData();
  }, []);

  return (
    <div className="container">
      <div className="all-clothes">
        <AddClothes />
        <div className="all-clothes__list">
          <ClothesItem />
        </div>
      </div>
    </div>
  )
}

export default ClothesList;
