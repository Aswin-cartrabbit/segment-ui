import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentFactory } from "../factories/ComponentFactory";

export function getFilterRow(field: any, order: any) {
  if (typeof order === "function") {
    const result = order(field.operator);
  }
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
