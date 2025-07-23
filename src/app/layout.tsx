"use client";
import { Provider } from "react-redux";
import UserProvider from "../context/UserContext";
import "./css/globals.css";
import { store } from "../redux/store";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <UserProvider>{children}</UserProvider>
        </Provider>
      </body>
    </html>
  );
}
