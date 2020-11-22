import  { composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./Reducers/root";
import { createStore, applyMiddleware } from "redux";


/**
 * Initialization of redux store and thunk middleware. Also redux-persit initalized
 * to be used as session storage for app
 */

// Persist set up
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user']
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['resources', 'languages']
}

const persistedReducer = persistReducer(persistConfig, root);

// Store created with persit reducer
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);

