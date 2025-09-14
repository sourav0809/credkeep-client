import { ZodType, ZodError } from "zod";

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
      return {
        success: false,
        errors,
      };
    }
    return {
      success: false,
      errors: {
        _form: "An unexpected error occurred",
      },
    };
  }
};
