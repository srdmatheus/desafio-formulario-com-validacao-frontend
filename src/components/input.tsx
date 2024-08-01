import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../lib/utils/styles";

type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-10 rounded-lg border-2 border-foreground bg-slate-50 px-2 text-foreground outline-none transition focus:shadow-main",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
