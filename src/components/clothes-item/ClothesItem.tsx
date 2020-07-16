import React from 'react';
import { IClothes } from '../../interfaces';
import './_clothes-item.scss';

const ClothesItem: React.FC<IClothes> = (props) => {
  const style = {
    backgroundImage: `url("${props.url}")`
  }
  return (
    <div className="item">
        <img className="item__image" src={props.url} />
      <div className="item__description">{props.clothesName}</div>
    </div>
  )
}

export default ClothesItem;

