import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./form-field";
import { Select } from "./select";
import { SpinnerGap } from "@phosphor-icons/react";
import { useLocalStorage } from "../hooks/use-local-storage";

const roles = [
  "Desenvolvedor Frontend",
  "Desenvolvedor Backend",
  "Desenvolvedor Full Stack",
  "Desenvolvedor Mobile",
  "Desenvolvedor de Software",
  "Engenheiro de Software",
  "Arquiteto de Software",
  "UI/UX Designer",
  "Analista de Sistemas",
  "Analista Programador",
  "DevOps Engineer",
  "Engenheiro de Dados",
  "QA Engineer",
  "Scrum Master",
  "Product Owner"
] as const;

const formSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
      { message: "Telefone é obrigatório" }
    ),
  role: z.enum([...roles], { message: "Campo obrigatório" }),
  linkedin: z.string().optional(),
  github: z.string().optional()
});

type FormType = z.infer<typeof formSchema>;

export const RegisterForm = () => {
  const methods = useForm<FormType>({
    resolver: zodResolver(formSchema)
  });
  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = methods;

  const { setItem, getItem } = useLocalStorage("fusion:form");

  const onSubmit = async (formData: FormType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const possibleItems = getItem();

      if (possibleItems) {
        setItem([...possibleItems, formData]);
      } else {
        setItem([formData]);
      }

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-3 rounded-lg border-2 bg-amber-50 px-4 pb-2 pt-8"
      >
        <FormField
          label="Nome"
          id="name"
          required
          errorMessage={errors.name?.message}
        >
          <Input {...methods.register("name")} id="name" />
        </FormField>

        <FormField
          label="E-mail"
          id="email"
          required
          errorMessage={errors.email?.message}
        >
          <Input {...methods.register("email")} id="email" />
        </FormField>

        <FormField
          label="Telefone"
          id="phone"
          required
          errorMessage={errors.phone?.message}
        >
          <Input {...methods.register("phone")} id="phone" type="tel" />
        </FormField>

        <FormField
          label="Cargo pretendido"
          id="role"
          required
          errorMessage={errors.role?.message}
        >
          <Select id="role" options={[...roles]} />
        </FormField>

        <FormField label="LinkedIn" id="linkedin">
          <Input {...methods.register("linkedin")} id="linkedin" />
        </FormField>

        <FormField label="Github" id="github">
          <Input {...methods.register("github")} id="github" />
        </FormField>

        <Button type="submit" disabled={isSubmitting} className="bg-success">
          {isSubmitting ? (
            <SpinnerGap className="animate-spin" size={24} weight="bold" />
          ) : (
            "Enviar"
          )}
        </Button>
        <div className="h-6">
          {isSubmitSuccessful && (
            <p className="rounded bg-success py-1 text-center text-xs font-medium tracking-tight text-green-900">
              Cadastro realizado com sucesso!
            </p>
          )}

          {Object.keys(errors).length > 0 && !isSubmitting && (
            <p className="rounded bg-danger/10 py-1 text-center text-xs font-medium tracking-tight text-danger">
              Falha ao cadastrar. Verifique os dados informados.
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
