import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "../../node_modules/lucide-react"; // Import the search icon from the appropriate icon library

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  normal?: boolean; // Add a "normal" prop
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, normal, ...props }, ref) => {
    if (normal) {
      // If the "normal" prop is true, render the default input look
      return (
        <input
          type={type}
          className={cn(
            "h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      );
    }

    // If the "normal" prop is not provided, render the modified input
    return (
      <div className="relative flex w-full ">
        <div className="absolute left-2">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type={type}
          className={cn(
            "flex-grow h-12 w-full rounded-full border border-input bg-secondary px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50 pl-8",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
