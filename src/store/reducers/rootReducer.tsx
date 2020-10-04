import { combineReducers } from 'redux';
import clothesReducer from './clothesReducer';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  clothes: clothesReducer,
  form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
