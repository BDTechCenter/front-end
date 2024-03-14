import * as React from "react";
import { ChangeEvent } from "react";
import { cn } from "@/lib/utils";

//@ts-ignore
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, value, onChange, ...props }, ref) => {
    const editValue = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      onChange(newValue);
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        value={value}
        onChange={editValue}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
