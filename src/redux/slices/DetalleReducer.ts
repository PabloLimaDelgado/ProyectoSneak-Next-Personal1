import { IDetalle } from "@/src/lib/types/IDetalle";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  detalle: IDetalle[];
}

const initialState: InitialState = {
  detalle: [],
};

const DetalleReducer = createSlice({
  name: "Detalle Reducer",
  initialState,
  reducers: {
    setDetalles(state, action: PayloadAction<IDetalle[]>) {
      state.detalle = action.payload;
    },
  },
});

export const { setDetalles } = DetalleReducer.actions;
export default DetalleReducer.reducer;
