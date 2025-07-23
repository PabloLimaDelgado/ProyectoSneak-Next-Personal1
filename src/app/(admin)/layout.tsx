"use client";

import {
  DeployedCode,
  Percent,
  ShoppingCart,
  Users,
} from "@/public/icons/Icons";
import { HeaderAdminGeneral } from "@/src/components/HeaderAdminGeneral";
import { useRouter, usePathname } from "next/navigation";
import { Adminh1 } from "@/src/components/ui/Adminh1";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname: string = usePathname();
  const [liActivo, setLiActivo] = useState<string>(pathname);
  const queryClient = new QueryClient();

  useEffect(() => {
    setLiActivo(pathname);
  }, [pathname]);

  const menuItems = [
    {
      label: "Productos",
      path: "/products",
      icon: (active: boolean) => (
        <DeployedCode
          strokeWidth={2}
          className={`size-5 ${
            active ? "text-blue-900" : "text-[color:var(--color-gray-50)]"
          }`}
        />
      ),
    },
    {
      label: "Pedidos",
      path: "/orders",
      icon: (active: boolean) => (
        <ShoppingCart
          strokeWidth={2}
          className={`size-5 ${
            active ? "text-blue-900" : "text-[color:var(--color-gray-50)]"
          }`}
        />
      ),
    },
    {
      label: "Descuentos",
      path: "/discounts",
      icon: (active: boolean) => (
        <Percent
          strokeWidth={2}
          className={`size-5 ${
            active ? "text-blue-900" : "text-[color:var(--color-gray-50)]"
          }`}
        />
      ),
    },
    {
      label: "Administradores",
      path: "/admins",
      icon: (active: boolean) => (
        <Users
          strokeWidth={2}
          className={`size-5 ${
            active ? "text-blue-900" : "text-[color:var(--color-gray-50)]"
          }`}
        />
      ),
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex w-screen h-screen flex-row">
        <div className="w-2/12 border-r-2 border-[color:var(--color-gray-30)]">
          <div className="flex flex-col h-screen">
            <HeaderAdminGeneral />
            <div className="flex flex-col h-5/6 items-center">
              <ul className="w-11/12 space-y-2 mt-1">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.path}
                    initial={{
                      borderWidth: 1,
                      borderRadius: 8,
                      borderColor: "rgb(255,255,255)",
                      background:
                        liActivo === item.path
                          ? "rgb(191 219 254)"
                          : "rgb(255,255,255)",
                    }}
                    animate={{
                      borderColor:
                        liActivo === item.path
                          ? "rgb(30, 64, 175)"
                          : "rgb(255, 255, 255)",
                      borderRadius: 8,
                      background:
                        liActivo === item.path
                          ? "rgb(191 219 254)"
                          : "rgb(255,255,255)",
                    }}
                    whileHover={{
                      background:
                        liActivo !== item.path
                          ? "var(--color-gray-10)"
                          : undefined,
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-2 py-1 cursor-pointer"
                    onClick={() => router.replace(item.path)}
                  >
                    <Adminh1 liActivo={liActivo} path={item.path}>
                      {item.icon(liActivo === item.path)}
                      {item.label}
                    </Adminh1>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-10/12">{children}</div>
      </div>
    </QueryClientProvider>
  );
}
