import { useFormContext } from "react-hook-form";
import { cn } from "../lib/utils/styles";

type SelectProps = {
  id: string;
  options: string[];
  errorMessage?: string;
};

export const Select = ({ id, options, errorMessage }: SelectProps) => {
  const { register } = useFormContext();
  return (
    <select
      {...register(id)}
      id={id}
      className={cn(
        "h-10 rounded-lg border-2 border-foreground bg-slate-50 px-2 text-foreground outline-none transition focus:shadow-main",
        errorMessage && "border-danger"
      )}
    >
      <option value="">Selecione...</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
