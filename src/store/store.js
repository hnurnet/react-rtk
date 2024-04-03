import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productSlice } from "./productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        [productSlice.reducerPath]: productSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productSlice.middleware),

});
setupListeners(store.dispatch)
export default store;