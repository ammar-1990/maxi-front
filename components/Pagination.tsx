'use client'
import React from "react";
 
import { cn } from "@/lib/utils"; 
import { useSearchParams } from "next/navigation";
import SuperButton from "@/components/SuperButton";
import { TAKE_BLOGS } from "@/lib/Types";
 

type Props = {
  count: number;
  href: string;
};

const Pagination = ({ count, href }: Props) => {
    const searchParams = useSearchParams()
    let page = +(searchParams.get('pageNumber') ?? 1)
    if(!page || isNaN(Number(page)) || Number(page) < 1 || !Number.isInteger(Number(page))){
        page = 1
    }
    const buildHref = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("pageNumber", newPage.toString()); // Update page param
    
        return `${href}?${params.toString()}`;
      };
  return (
    <div className="flex items-center justify-between w-full">
      <SuperButton
      variant="secondary"
        className={cn(page <=1 && 'invisible')}
        buttonType="linkButton"
        href={buildHref(page - 1)}
        title="Back"
      />
      <span className="text-xs text-muted-foreground">{page}/{Math.ceil(count / TAKE_BLOGS)}</span>
      <SuperButton
      variant="secondary"
        className={cn((page * TAKE_BLOGS >= count ) && 'invisible')}
        buttonType="linkButton"
        href={buildHref(page + 1)}
        title="Next"
      />
    </div>
  );
};

export default Pagination;
