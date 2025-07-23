import Image from "next/image";
import logoBlanco from "../../public/images/logoblanco.png";

export const HeaderLogin = () => {
  return (
    <header className="w-dvw bg-[var(--color-gray-50)] flex items-center justify-center flex-col h-40">
      <Image
        src={logoBlanco}
        alt="Imgen logo Sneak Blanco"
        className="size-30 scale-175"
      />
      <h1 className="font-['Bebas_Neue'] w-dvw text-center text-5xl text-white ">SNEAKSHOP</h1>
    </header>
  );
};
