"use client";

import { toast } from "sonner";

/**
 * Standard Success Toast
 */
export const showSuccessToast = (message) => {
  toast.success(message);
};

/**
 * Standard Error Toast
 */
export const showErrorToast = (message, error = null) => {
  if (error) {
    console.error(message, error);
  }
  toast.error(message);
};

/**
 * Standard Loading/Info Toast
 */
export const showLoadingToast = (message) => {
  toast.info(message);
};

/**
 * Standardized Promise Toast
 * Handles loading, success, and error states automatically
 */
export const withToastPromise = (promise, { loading, success, error }) => {
  toast.promise(promise, {
    loading: loading || "Processing...",
    success: success || "Completed successfully!",
    error: error || "Something went wrong. Please try again.",
  });
  return promise;
};
