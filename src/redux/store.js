import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./Reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["allDataReducer", "countryReducer", "graphReducer"],
  keyPrefix: "",
};

const persistedReducer = persistReducer(persistConfig, combineReducers);
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
