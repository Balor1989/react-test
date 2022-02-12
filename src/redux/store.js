// import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos-reducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

const persistConfig = {
	key: "todo",
	storage,
};
const rootReducer = combineReducers({
	todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
