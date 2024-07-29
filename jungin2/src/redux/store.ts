import { configureStore, Store } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

export const store: Store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;