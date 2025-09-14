import * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "secondary" | "muted" | "gradient";
  text?: string;
  showText?: boolean;
  type?: "spinner" | "dots" | "pulse";
}

const spinnerVariants = {
  size: {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  },
  variant: {
    default: "border-gray-300",
    primary: "border-primary/20 border-t-primary",
    secondary: "border-secondary/20 border-t-secondary",
    muted: "border-muted/20 border-t-muted-foreground",
    gradient:
      "border-transparent border-t-primary bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full",
  },
};

function Spinner({
  className,
  size = "md",
  variant = "primary",
  text = "Loading...",
  showText = true,
  type = "spinner",
  ...props
}: SpinnerProps) {
  if (type === "dots") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4",
          className
        )}
        {...props}
      >
        <div className="flex space-x-1">
          <div
            className={cn(
              "w-2 h-2 bg-blue-500 rounded-full animate-bounce",
              size === "sm" && "w-1.5 h-1.5",
              size === "lg" && "w-3 h-3",
              size === "xl" && "w-4 h-4"
            )}
            style={{ animationDelay: "0ms" }}
          />
          <div
            className={cn(
              "w-2 h-2 bg-blue-500 rounded-full animate-bounce",
              size === "sm" && "w-1.5 h-1.5",
              size === "lg" && "w-3 h-3",
              size === "xl" && "w-4 h-4"
            )}
            style={{ animationDelay: "150ms" }}
          />
          <div
            className={cn(
              "w-2 h-2 bg-blue-500 rounded-full animate-bounce",
              size === "sm" && "w-1.5 h-1.5",
              size === "lg" && "w-3 h-3",
              size === "xl" && "w-4 h-4"
            )}
            style={{ animationDelay: "300ms" }}
          />
        </div>
        {showText && (
          <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
        )}
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "bg-primary rounded-full animate-pulse",
            spinnerVariants.size[size]
          )}
        />
        {showText && (
          <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-solid",
          spinnerVariants.size[size],
          spinnerVariants.variant[variant]
        )}
        style={{ borderWidth: "2px" }}
      />
      {showText && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );
}

export { Spinner };
