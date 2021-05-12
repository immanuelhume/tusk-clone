import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import thunk from "redux-thunk";
import { newTaskReducer } from "./newTaskSlice";
import { tasksReducer } from "./tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  newTask: newTaskReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  whitelist: ["tasks"],
};

const persistedReducer = persistReducer<
  ReturnType<typeof rootReducer>,
  AnyAction
>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
