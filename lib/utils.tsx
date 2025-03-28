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

export function highlightText(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-yellow-200 text-foreground font-semibold">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
