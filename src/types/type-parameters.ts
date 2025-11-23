export function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `key: ${String(key)} value: ${obj[key]}`;
}
