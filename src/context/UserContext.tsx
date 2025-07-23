"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { IUsuario } from "../lib/types/IUsuario";
import { IRol } from "../lib/types/enums/IRol";

interface UserContextType {
  usuario: IUsuario | null;
  isAdmin: boolean;
  isUser: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    const currentPath = window.location.pathname;

    const publicRoutes = ["/signin", "/signup"];
    
    if (!userData) {
      if (!publicRoutes.includes(currentPath)) {
        router.replace("/signup");
      }
      return;
    }

    try {
      const parsedUser: IUsuario = JSON.parse(userData);
      setUsuario(parsedUser);

      if (currentPath === "/") {
        parsedUser.rol === IRol.ADMIN
          ? router.replace("/products")
          : router.replace("/landing");
      }
    } catch (error) {
      console.error("Error parsing user:", error);
      localStorage.removeItem("usuario");

      if (!publicRoutes.includes(currentPath)) {
        router.replace("/signup");
      }
    }
  }, []);

  const isAdmin = usuario?.rol === "ADMIN";
  const isUser = usuario?.rol === "USER";

  return (
    <UserContext.Provider value={{ usuario, isAdmin, isUser }}>
      {children}
    </UserContext.Provider>
  );
}
