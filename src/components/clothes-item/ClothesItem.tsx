import React from 'react';

const ClothesItem: React.FC = () => {
  return (
    <div className="list__item">
      <img className="item__image" src={require('./1.jpg')} />
      <span className="item__description">clothes</span>
    </div>
  )
}

export default ClothesItem;
