import { FC } from "react";

interface IDetailProductDiv {
  titulo: string;
  contenido: string;
}

export const DetailProductDiv: FC<IDetailProductDiv> = ({
  titulo,
  contenido,
}) => {
  return (
    <div className="flex flex-col px-1.5">
      <h2 className="font-['Afacad-Regular'] [color:var(--color-gray-50)]">{titulo}</h2>
      <h3 className="font-['Afacad-SemiBold']">{contenido}</h3>
    </div>
  );
};
