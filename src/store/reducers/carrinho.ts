import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../App";

type CarrinhoState = {
    itens: Game[]
}

const initialState: CarrinhoState = {
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        Adicionar: (state, action: PayloadAction<Game>) => {
            const Jogo = action.payload;

            if (state.itens.find((game) => game.id === Jogo.id)) {
                alert("Esse jogo já esta no carrinho")
            } else {
                state.itens.push(Jogo)
            }
        }    
    }
})

export const {Adicionar} = carrinhoSlice.actions
export default carrinhoSlice.reducer
