import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import CustomError from "./CustomError";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const errorToast = (message: string = "Something went wrong") =>
  toast.error(message);

export const throwCustomError = (message: string): never => {
  throw new CustomError(message);
};