const isTypeElse = (value: unknown, defaultValue: string) => (typeof value === "string" ? value : defaultValue);

export { isTypeElse };
