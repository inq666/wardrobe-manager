import { takeEvery, put, call } from 'redux-saga/effects'
import { loadClothes, fetchClothesCompleted } from '../store/actions/clothesAction'
import { instance } from '../api/api'
import { LOAD_CLOTHES } from '../store/actions/actionTypes';

function fetchData() {
  return instance.get('clothes.json')
    .then(response => response.data)
}

function* workerLoadClothes() {
  const clothesItems = [];
  const data = yield call(fetchData);
  console.log(data)
  for (let key of Object.entries(data)) {
    const newItem = {
      id: key[0],
      clothesTitle: key[1].clothesTitle,
      url: key[1].pictureUrl,
    }
    clothesItems.push(newItem);
  }
  console.log(clothesItems)
  yield put(fetchClothesCompleted(clothesItems))
}

export function* watchLoadClothes() {
  yield takeEvery(LOAD_CLOTHES, workerLoadClothes)
}
