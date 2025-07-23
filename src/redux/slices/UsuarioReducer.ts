import { IUsuario } from "@/src/lib/types/IUsuario";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  usuario: IUsuario[];
  usuarioActivo: IUsuario | null;
}

const initialState: InitialState = {
  usuario: [],
  usuarioActivo: null,
};

const UsuarioReducer = createSlice({
  name: "Usuario Reducer",
  initialState,
  reducers: {
    setUsuarios(state, action: PayloadAction<IUsuario[]>) {
      state.usuario = action.payload;
    },
    setUsuarioActivo(state, action: PayloadAction<IUsuario>) {
      state.usuarioActivo = action.payload;
    },
  },
});

export const { setUsuarios, setUsuarioActivo } = UsuarioReducer.actions;
export default UsuarioReducer.reducer;
