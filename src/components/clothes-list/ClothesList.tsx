import React, { useState, useEffect } from 'react';
import ClothesItem from '../clothes-item/ClothesItem';
import AddClothes from '../add-clothes/AddClothes';
import { IClothes } from '../../interfaces';
import axios from 'axios';
import './_clothes-list.scss';

const ClothesList: React.FC = () => {

  const [clothesItems, setClothesItems] = useState<IClothes[]>([])

  useEffect(() => {
    const getClothesData = async () => {
      const response = await axios.get('https://wardrobe-manager-6dca3.firebaseio.com/clothes.json')
      const arrayItems = [];
      for (let key of Object.entries(response.data)) {
        const itemData: any = key[1];
        const newItem: IClothes = {
          id: key[0],
          clothesName: itemData.clothesName,
          url: itemData.url,
        }
        arrayItems.push(newItem);
      }
      setClothesItems(arrayItems)
    }
    getClothesData();
  }, []);

  const addItemHandler = (newItem: IClothes) => {
    setClothesItems(prev => [newItem, ...prev])
  }

  return (
    <div className="wrapper">
      <div className="all-clothes">
        <AddClothes onAdd={addItemHandler} />
        <div className="all-clothes__list">
          {
            clothesItems.map(item => {
              return (
                <ClothesItem
                  id={item.id}
                  key={item.id}
                  clothesName={item.clothesName}
                  url={item.url}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ClothesList;
