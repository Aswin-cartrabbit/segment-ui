import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentFactory } from "../factories/ComponentFactory";

export function getFilterRow(field: any) {
  return ComponentFactory.createComponent(field.type, { ...field });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const lowercaseFirstLetter = (string: string): string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const lowerCase = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
};

export const titleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const findValueByKey = (
  obj: { [x: string]: any; hasOwnProperty: (arg0: string) => any },
  key: string
) => {
  for (let k in obj) {
    if (!obj.hasOwnProperty(k)) continue;
    if (k === key) return obj[k];
    // If the value is an object, recurse
    if (typeof obj[k] === "object" && obj[k] !== null) {
      const result: any = findValueByKey(obj[k], key);
      if (result !== undefined) return result;
    }
  }
  return undefined;
};

export const getNestedValue = (
  obj: { [key: string]: any },
  keys: string[]
): any => {
  const [currentKey, ...remainingKeys] = keys;

  if (Array.isArray(obj)) {
    const index = parseInt(currentKey, 10);
    if (!isNaN(index) && index >= 0 && index < obj.length) {
      return getNestedValue(obj[index], remainingKeys);
    }
  }

  if (remainingKeys.length === 0) {
    return obj[currentKey];
  }

  if (obj[currentKey] === undefined) {
    return undefined; // Key path doesn't exist
  }

  return getNestedValue(obj[currentKey], remainingKeys);
};

export const getKeys = (path: string): string[] => {
  return path
    .split(".")
    .map((key) => (key.includes("[") ? key.replace("]", "").split("[") : key))
    .flat();
};
