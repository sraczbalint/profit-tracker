export const queryStringToString = (value: unknown) =>
  typeof value === "string" ? value : undefined;
