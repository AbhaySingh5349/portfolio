export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export const validateEmail = (email: string) => {
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};

export const getErrorMessage = (error: unknown): string => {
  let msg: string;

  if (error instanceof Error) {
    msg = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    msg = (error as { message?: string }).message || ''; // type assertion that tells TypeScript to treat error as an object with an optional message property of type string.
  } else if (typeof error === 'string') {
    msg = error;
  } else {
    msg = 'Something went wrong';
  }

  return msg;
};
