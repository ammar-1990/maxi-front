import { cn } from "@/lib/utils";
import React, { PropsWithChildren, Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
 

type Props = { className?: string } & PropsWithChildren;

const SuspenseComponent = ({ children, className }: Props) => {
  return (
    <Suspense
      fallback={
        <Skeleton className={cn("min-h-[350px] bg-slate-100", className)} />
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseComponent;
