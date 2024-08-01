import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../lib/utils/styles";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex h-10 min-w-32 items-center justify-center text-nowrap rounded-lg border-2 border-foreground bg-background-foreground px-4 py-2 font-medium text-foreground transition-all hover:shadow-main disabled:cursor-not-allowed disabled:text-foreground/60",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
