import SignInForm from "@/src/components/auth/SignInForm";
import SignUpForm from "@/src/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio de Sesión | Proyecto Next",
  description:
    "Esta es la página de inicio de sesion del grupo los discipulos del chiro",
};
export default function SignIn() {
  return (
    <>
      <h1 className="font-['Bebas_Neue'] text-5xl text-black">Iniciar Sesión</h1>
      <SignUpForm />
    </>
  );
}
