import { IDescuento } from "@/src/lib/types/IDescuento";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  descuento: IDescuento[];
}

const initialState: InitialState = {
  descuento: [],
};

const DescuentoReducer = createSlice({
  name: "Descuento Reducer",
  initialState,
  reducers: {
    setDescuentos(state, action: PayloadAction<IDescuento[]>) {
      state.descuento = action.payload;
    },
  },
});

export const { setDescuentos } = DescuentoReducer.actions;
export default DescuentoReducer.reducer;
