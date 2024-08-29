import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn("h-14 w-full bg-gray-500 text-white font-medium placeholder:text-gray-300 rounded-lg px-4 border border-gray-700 outline-0 focus-visible:ring-2 focus-visible:ring-purple-dark focus-visible:ring-offset-0", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
