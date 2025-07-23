import { configureStore } from "@reduxjs/toolkit";
import ProductoReducer from "./slices/ProductoReducer";
import DetalleReducer from "./slices/DetalleReducer";
import OrdenCompraReducer from "./slices/OrdenCompraReducer";
import DescuentoReducer from "./slices/DescuentoReducer";
import UsuarioReducer from "./slices/UsuarioReducer";

export const store = configureStore({
  reducer: {
    usuarioReducer: UsuarioReducer,
    productoReducer: ProductoReducer,
    detalleReducer: DetalleReducer,
    ordenCompraReducer: OrdenCompraReducer,
    descuentoReducer: DescuentoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
