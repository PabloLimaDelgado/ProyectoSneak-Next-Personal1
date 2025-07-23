"use client";

import { House } from "@/public/icons/Icons";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface IHeaderAdmin {
  title: string;
  description: string;
}

export const HeaderAdmin: FC<IHeaderAdmin> = ({ title, description }) => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-row justify-between items-center
                      px-10 py-5 h-4/24
                      border-b-2 border-b-[color:var(--color-gray-30)]"
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-['Roboto-SemiBold'] text-4xl">{title}</h1>
          <h2 className="font-['Roboto-Regular'] text-[color:var(--color-gray-40)] text-xl">
            {description}
          </h2>
        </div>
        <House
          onClick={() => router.replace("/landing")}
          className="custom-icon-button text-black"
          strokeWidth={2}
        />
      </div>
    </>
  );
};
