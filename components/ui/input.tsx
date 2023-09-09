import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "../../node_modules/lucide-react"; // Import the search icon from the appropriate icon library

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center"> {/* Add a relative container with flex layout */}
        <div className="absolute left-2"> {/* Position the icon to the left */}
          {/* Add the search icon here */}
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type={type}
          className={cn(
            "flex-grow h-12 w-full rounded-full border border-input bg-secondary px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50 pl-8", // Add pl-8 to push the cursor to the right
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
