import { FC } from "react";
import { ButtonAdd } from "./ui/ButtonAdd";
import { Plus } from "@/public/icons/Icons";
import { ButtonAdmin } from "./ui/ButtonAdmin";

interface IButtonsAdmin {
  buttons: {
    titulo: string;
    modal: () => void;
  }[];
  children: React.ReactNode;
}

export const ButtonsAdmin: FC<IButtonsAdmin> = ({ buttons, children }) => {
  return (
    <div className="flex flex-row justify-start p-5 gap-5 border-b-2 border-b-[color:var(--color-gray-30)] h-3/24 items-center">
      {buttons.map((button, index) => {
        return index === 0 ? (
          <ButtonAdd key={index} onClick={button.modal}>
            <Plus className="size-5 text-white" strokeWidth={3} />
            {button.titulo}
          </ButtonAdd>
        ) : (
          <ButtonAdmin key={index} onClick={button.modal}>
            <Plus className="size-5 text-black" strokeWidth={3} />
            {button.titulo}
          </ButtonAdmin>
        );
      })}

      {children}
    </div>
  );
};
