"use client";

import { Search } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useSearch } from "../(site)/hooks/useSearch";
import Link from "next/link";
import { highlightText } from "@/lib/utils";

type Props = {};

const SearchComponent = (props: Props) => {
  const { query, results, setQuery, isPending, debouncedQuery, reset } =
    useSearch();
  return (
    <Dialog onOpenChange={() => reset()}>
      <DialogTrigger>
        <div className="rounded-full shadow-sm flex items-center gap-28 cursor-pointer transition hover:shadow-md px-6 py-2">
          <span>Search</span>
          <Search />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl w-[95vw]">
        <div>
          {/* header */}
          <DialogHeader>
            <DialogTitle>Search Blogs</DialogTitle>
          </DialogHeader>
          {/* input */}
          <Input
            placeholder="Type to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-sm mt-2"
          />

          {/* results */}
          <div className="mt-5 max-h-[400px] overflow-y-auto">
            {isPending ? (
              <p className="text-sm text-muted-foreground">Searching...</p>
            ) : results.length > 0 ? (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {results.map((post) => (
                  <DialogClose asChild key={post.slug} className="w-full  ">
                    <Link
                      href={`/blog/${post.subCategory.category.slug}/${post.subCategory.slug}/${post.slug}`}
                      className="flex flex-col text-start p-2 border rounded hover:bg-muted w-full relative"
                    >
                      <span className="top-3 right-3 bg-site-primary z-10 text-white text-xs rounded-full px-3 py-1 absolute capitalize font-[500]">
                        {post.subCategory.category.name}
                      </span>
                      <p className="text-xs font-[500] ">
                      {highlightText(post.subCategory.name, query)}
                      </p>
                      <h3 className="font-medium">
                        {highlightText(post.title, query)}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {highlightText(
                          post.excerpt || "",
                          query
                        )}
                        ...
                      </p>
                    </Link>
                  </DialogClose>
                ))}
              </div>
            ) : (
              debouncedQuery && (
                <p className="text-sm text-muted-foreground">
                  No results found.
                </p>
              )
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchComponent;
