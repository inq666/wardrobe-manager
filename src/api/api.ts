import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://wardrobe-manager-6dca3.firebaseio.com/'
})


type getClothesType = {
  item: {
    clothesTitle: string
    url: string
  }
}

type addClothesType = {
  name: string
}

export const clothesApi = {
  getClothes() {
    return instance.get<getClothesType>('clothes.json').then(response => response.data);
  },
  deleteClothes(id: string) {
    return instance.delete(`clothes/${id}.json`);
  },
  addClothes(clothesTitle: string, pictureUrl: string) {
    return instance.post<addClothesType>('clothes.json', { clothesTitle, pictureUrl }).then(response => response.data)
  }
}


