/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { ErrorObject } from "../types.js";

export const extractError = (e: unknown) => {
  const error = e as Error;
  let message;
  if (error?.cause) {
    const { cause } = error as { cause: ErrorObject };
    message = cause;
  } else {
    message = { error };
  }
  return message;
};

export const formatRunError = (e: unknown) => {
  if (typeof e === "string") {
    return e;
  }
  if (e instanceof Error) {
    return e.message;
  }
  if ("message" in (e as { message: string })) {
    return (e as { message: string }).message;
  }
  // Presume it's an ErrorObject.
  const error = (e as { error: unknown }).error;
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
};
