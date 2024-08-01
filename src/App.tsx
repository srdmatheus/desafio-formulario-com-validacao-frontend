import { RegisterForm } from "./components/register-form";

export const App = () => {
  return (
    <main className="font-rubik flex h-dvh w-full flex-col items-center justify-center bg-zinc-50 px-4">
      <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Formulário de cadastro
      </h1>
      <div className="w-80 md:w-[400px]">
        <RegisterForm />
      </div>
    </main>
  );
};
