import { configureStore } from "@reduxjs/toolkit";
import CarrinhoReducer from "./reducers/carrinho"

const store = configureStore({
    reducer: {
        carrinho: CarrinhoReducer,
    }
})