import { clothesApi, instance } from '../../api/api';
import { IClothes } from '../../interfaces';
import { FETCH_CLOTHES_COMPLETED, DELETE_CLOTHES_COMPLETED, ADD_CLOTHES_COMPLETED, LOAD_CLOTHES } from './actionTypes'
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../reducers/rootReducer';
import { storage } from '../../firebase';

//Action Types
type FetchClothesCompletedType = {
  type: typeof FETCH_CLOTHES_COMPLETED,
  clothesItems: Array<IClothes>
}
type DeleteClothesCompletedType = {
  type: typeof DELETE_CLOTHES_COMPLETED,
  deletedItemId: string
}

type AddClothesCompletedType = {
  type: typeof ADD_CLOTHES_COMPLETED
  newClothesItem: IClothes
}

//Thunk Actions
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export function fetchClothes(): ThunkType {
  return async (dispatch) => {
    const data = await clothesApi.getClothes();
    const clothesItems: Array<IClothes> = [];
    for (let key of Object.entries(data)) {
      const newItem = {
        id: key[0],
        clothesTitle: key[1].clothesTitle,
        url: key[1].url,
      }
      clothesItems.push(newItem);
    }
    dispatch(fetchClothesCompleted(clothesItems))
  }
}

export function deleteClothes(deletedItemId: string): ThunkType {
  return async (dispatch) => {
    dispatch(deleteClothesCompleted(deletedItemId));
    await clothesApi.deleteClothes(deletedItemId);
  }
}

export function addClothes(): ThunkType {
  return async (dispatch, getState) => {
    const formValues = getState().form.clothesCreator.values;
    if (!formValues) return;
    const clothesTitle: string = formValues.title;
    const clothesPicture: File = formValues.file[0];

    storage
      .ref(`clothes/${clothesPicture.name}`)
      .put(clothesPicture)
      .on('state_changed',
        (snapshot) => {
          console.log(snapshot)
        },
        (error) => {
          console.log(error)
        },
        () => {
          storage.ref('clothes').child(clothesPicture.name).getDownloadURL().then(url => {
            clothesApi.addClothes(clothesTitle, url)
              .then(response => {
                const newClothesItem: IClothes = {
                  id: response.name,
                  clothesTitle,
                  url,
                }
                dispatch(addClothesCompleted(newClothesItem))
              })
          })
        })
  }
}

// Action Creators
export function loadClothes() {
  return {
    type: LOAD_CLOTHES
  }
}

export function fetchClothesCompleted(clothesItems: Array<IClothes>): FetchClothesCompletedType {
  return {
    type: FETCH_CLOTHES_COMPLETED,
    clothesItems
  }
}

export function deleteClothesCompleted(deletedItemId: string): DeleteClothesCompletedType {
  return {
    type: DELETE_CLOTHES_COMPLETED,
    deletedItemId
  }
}

export function addClothesCompleted(newClothesItem: IClothes): AddClothesCompletedType {
  return {
    type: ADD_CLOTHES_COMPLETED,
    newClothesItem,
  }
}

export type ActionsTypes = FetchClothesCompletedType | DeleteClothesCompletedType | AddClothesCompletedType
