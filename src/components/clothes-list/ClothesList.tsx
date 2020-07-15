import React, { useState } from 'react';
import ClothesItem from '../clothes-item/ClothesItem';
import './_clothes-list.scss';
import axios from 'axios';


const ClothesList: React.FC = () => {
  const [clothesName, setClothesName] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClothesName(event.target.value);
  }

  const addItemHandler = () => {
    console.log(clothesName)
    axios.post('https://wardrobe-manager-6dca3.firebaseio.com/clothes.json', { clothesName })
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="container">
      <div className="all-clothes">
        <form>
          <div className="form-group">
            <input type="file" className="form-control-file" />
          </div>
        </form>
        <input
          className="form-control"
          type="text"
          onChange={changeHandler} />
        <button
          className="btn btn-primary btn-lg btn-block"
          type="button"
          onClick={addItemHandler} >
          add new clothes
          </button>
        <div className="all-clothes__list">
          <ClothesItem />
          <ClothesItem />
          <ClothesItem />
          <ClothesItem />
          <ClothesItem />
        </div>
      </div>
    </div>
  )
}

export default ClothesList;
