import SignInForm from "@/src/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse | Proyecto Next",
  description:
    "Esta es la página de registro de usuario del grupo los discipulos del chiro",
};
export default function SignIn() {
  return (
    <>
      <h1 className="font-['Bebas_Neue'] text-5xl text-black">Registrarse</h1>
      <SignInForm />
    </>
  );
}
