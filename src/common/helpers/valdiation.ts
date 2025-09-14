import { ZodType, ZodError } from "zod";
import { toast } from "sonner";

export type ValidationResult<T> = {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
};

export const validateForm = <T>(
  schema: ZodType<T, any, any>,
  data: unknown
): ValidationResult<T> => {
  try {
    const validData = schema.parse(data);
    return {
      success: true,
      data: validData,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((issue) => {
        if (issue.path.length > 0 && typeof issue.path[0] === "string") {
          errors[issue.path[0]] = issue.message;
        }
      });

      // Automatically toast the first error
      const firstError = Object.values(errors)[0];
      if (firstError) {
        toast.error(firstError);
      }

      return {
        success: false,
        errors,
      };
    }

    // Handle unexpected errors
    toast.error("An unexpected error occurred");
    return {
      success: false,
      errors: {
        _form: "An unexpected error occurred",
      },
    };
  }
};
