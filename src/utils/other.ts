const getString = (value: unknown, defaultValue: string) => (typeof value === "string" ? value : defaultValue);

export { getString };
