import { IProducto } from "@/src/lib/types/IProducto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  producto: IProducto[];
}

const initialState: InitialState = {
  producto: [],
};

const ProductoReducer = createSlice({
  name: "Producto Reducer",
  initialState,
  reducers: {
    setProductos(state, action: PayloadAction<IProducto[]>) {
      state.producto = action.payload;
    },
  },
});

export const { setProductos } = ProductoReducer.actions;
export default ProductoReducer.reducer;
