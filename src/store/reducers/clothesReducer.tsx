import { FETCH_CLOTHES_COMPLETED, DELETE_CLOTHES_COMPLETED, ADD_CLOTHES_COMPLETED } from "../actions/actionTypes"
import { IClothes } from "../../interfaces"
import { ActionsTypes } from "../actions/clothesAction";

const initialState = {
  clothesItems: [] as Array<IClothes>
}

type InitialStateType = typeof initialState;

export default function clothesReducer(state = initialState, action: ActionsTypes): InitialStateType {
  switch (action.type) {
    case FETCH_CLOTHES_COMPLETED:
      return {
        clothesItems: action.clothesItems
      }
      case DELETE_CLOTHES_COMPLETED:
        return {
          clothesItems: state.clothesItems.filter(item => item.id !== action.deletedItemId)
        }
        case ADD_CLOTHES_COMPLETED:
          return {
            clothesItems: [action.newClothesItem, ...state.clothesItems]
          }
    default:
      return state
  }
}
