const second = (value: number) => value * 1000;

const minute = (value: number) => value * second(60);

const hour = (value: number) => value * minute(60);

const day = (value: number) => value * hour(24);

export { second, minute, hour, day };
