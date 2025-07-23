"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");

    if (!usuario) {
      router.push("/signin");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return null;
  }

  return <>{children}</>;
}
