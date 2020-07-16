import React, { useState } from 'react';
import axios from 'axios';
import firebase from '../../firebase/index';
import { storage } from '../../firebase/index';
import { IClothes } from '../../interfaces';

interface AddClothesProps {
  onAdd(newItem: IClothes): void,
}

const AddClothes: React.FC<AddClothesProps> = ({ onAdd }) => {
  const [clothesPicture, setClothesPictures] = useState<File>();
  const [clothesName, setClothesName] = useState<string>('');

  const changePictureHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      setClothesPictures(event.target.files[0]);
    }
  }

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClothesName(event.target.value)
  }

  const addItemHandler = () => {
    if (!clothesPicture || !clothesName) return;
    const uploadTask = storage
      .ref(`clothes/${clothesPicture.name}`)
      .put(clothesPicture);

    uploadTask.on('state_changed',
      (snapshot) => {
        console.log(snapshot)
      },
      (error) => {
        console.log(error)
      },
      () => {
        storage.ref('clothes').child(clothesPicture.name).getDownloadURL().then(url => {
          axios.post('https://wardrobe-manager-6dca3.firebaseio.com/clothes.json', { clothesName, url })
            .then(response => {
              const newItem: IClothes = {
                id: response.data.name,
                clothesName: clothesName,
                url,
              }
              onAdd(newItem)
            })
            .catch(error => console.log(error))
        })
      })
  }
  return (
    <div>
      <input
        className="form-control-file"
        type="file"
        onChange={changePictureHandler} />
      <input
        className="form-control"
        type="text"
        onChange={changeInputHandler} />
      <button
        className="btn btn-primary btn-lg btn-block"
        type="button"
        onClick={addItemHandler} >
        ADD NEW CLOTHES </button>
    </div>
  )
}

export default AddClothes;
