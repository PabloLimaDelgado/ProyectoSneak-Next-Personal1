import { UserIcon } from "@/public/icons/Icons";
import { HeaderLogin } from "@/src/components/HeaderLogin";

export default function InicioSesion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderLogin />
      <div className="flex flex-col justify-center items-center m-1 mt-2">
        <UserIcon
          className="size-40 border-5 rounded-full border-solid border-black text-black"
          strokeWidth={2}
        />
        {children}
      </div>
    </div>
  );
}
