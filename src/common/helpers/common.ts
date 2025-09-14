/**
 * Get the error message from the error object
 * @param error - The error object
 * @returns The error message
 */
export const getErrorMessage = (error: any) => {
  return (
    error.response.data.message ||
    error.message ||
    error.response.data.error ||
    "Something went wrong"
  );
};
