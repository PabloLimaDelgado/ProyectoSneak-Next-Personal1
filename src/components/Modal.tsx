import { Plus } from "@/public/icons/Icons";
import React, { FC } from "react";

interface IModal {
  titulo: string;
  close: () => void;
  inputs: {
    input: () => React.ReactNode;
    placeholder: string;
  }[];
  descripcion: string;
  modalAbierto: string | null;
  onSubmit: () => void;
}

export const Modal: FC<IModal> = ({
  titulo,
  close,
  inputs,
  descripcion,
  modalAbierto,
  onSubmit,
}) => {
  return (
    <>
      {modalAbierto && (
        <form
          onSubmit={onSubmit}
          className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10 backdrop-blur-md backdrop-brightness-90"
        >
          <div className="w-150 h-auto bg-white rounded-md flex flex-col">
            <div className="px-3 pt-3 pb-0 flex flex-row justify-between">
              <h1 className="font-['Bebas_Neue'] text-3xl">{titulo}</h1>
              <button
                onClick={close}
                className="hover:bg-[color:var(--color-gray-10)] rounded-sm transition duration-150 ease-in-out cursor-pointer"
              >
                <Plus
                  strokeWidth={2}
                  className="size-10 p-2.5 rounded-md rotate-45"
                />
              </button>
            </div>
            <h2 className="font-['Roboto-Regular'] border-b-2 border-b-[color:var(--color-gray-20)] px-3 pb-3 text-[color:var(--color-gray-50)]">
              {descripcion}
            </h2>
            <div className="max-h-80 overflow-auto flex flex-col px-3 py-1">
              {inputs.map((input) => (
                <div className="flex flex-col px-3" key={input.placeholder}>
                  <label className="font-['Afacad-Medium']">
                    {input.placeholder}
                  </label>
                  {input.input()}
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center justify-end p-3 gap-2 border-t-2 border-t-[color:var(--color-gray-20)] bg-[color:var(--color-gray-10)]">
              <button
                className="rounded-sm border-1 border-[color:var(--color-gray-20)] p-2 bg-white font-['Roboto-Regular'] text-sm hover:bg-[color:var(--color-gray-20)] transition duration-150 ease-in-out hover:cursor-pointer"
                onClick={close}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-sm border-1 border-[color:var(--color-gray-20)] p-2 bg-black font-['Roboto-Regular'] text-sm hover:bg-[color:var(--color-gray-50)] text-white transition duration-150 ease-in-out hover:cursor-pointer"
              >
                {titulo.split(" ")[0]}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
