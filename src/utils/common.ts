export const pick = <T extends object>(target: T, keys: (keyof T)[]) => {
  return Object.fromEntries(keys.map((key) => [key, target[key]]));
};
