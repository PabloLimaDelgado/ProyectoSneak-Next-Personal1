import { DeployedCode } from "@/public/icons/Icons";

export const HeaderAdminGeneral = () => {
  return (
    <>
      <div className="flex flex-row h-1/6 p-1 justify-center gap-1 items-center border-b-2 border-b-[color:var(--color-gray-30)]">
        <DeployedCode
          className="size-15 text-white border-white bg-black p-1 rounded-md"
          strokeWidth={2}
        />

        <div className="flex flex-col">
          <h2 className="font-['Bebas_Neue'] text-4xl">SneakAdmin</h2>
          <h3 className="font-['Roboto-Regular'] text-[color:var(--color-gray-40)]">Panel de administración</h3>
        </div>
      </div>
    </>
  );
};
