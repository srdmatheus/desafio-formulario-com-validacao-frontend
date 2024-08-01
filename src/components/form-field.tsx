import { ErrorMessage } from "./error-message";
import { cn } from "../lib/utils/styles";
import { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  id: string;
  errorMessage?: string;
  children: ReactNode;
  required?: boolean;
};

export const FormField = (props: FormFieldProps) => {
  const { label, id, errorMessage, children, required } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="flex items-center justify-between">
        <span className={cn("font-medium", errorMessage && "text-danger")}>
          {label}
          {required && (
            <span
              className="size-2 font-bold text-danger"
              title="Campo obrigatório"
            >
              {" "}
              *
            </span>
          )}
        </span>

        <ErrorMessage>{errorMessage}</ErrorMessage>
      </label>
      {children}
    </div>
  );
};
