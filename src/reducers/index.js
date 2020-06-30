
import { combineReducers } from "redux";
import data from "./gameData/gameDataReducer";
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/user.reducer";
import gameDataReducer from "./gameData/gameDataReducer";
import {persistReducer} from 'redux-persist'

const persistConfig = {
  key:'root',
  storage:storage,
  whitelist:['gameData']
}

const rootReducer = combineReducers({
  user: userReducer,
  gameData: gameDataReducer
});

export default persistReducer(persistConfig, rootReducer)