import { IOrdenCompra } from "@/src/lib/types/IOrdenCompra";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  ordenCompra: IOrdenCompra[];
}

const initialState: InitialState = {
  ordenCompra: [],
};

const OrdenCompraReducer = createSlice({
  name: "Orden Compra Reducer",
  initialState,
  reducers: {
    setOrdenesCompra(state, action: PayloadAction<IOrdenCompra[]>) {
      state.ordenCompra = action.payload;
    },
  },
});

export const { setOrdenesCompra } = OrdenCompraReducer.actions;
export default OrdenCompraReducer.reducer;
