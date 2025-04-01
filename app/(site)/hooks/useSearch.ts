import { Post } from "@prisma/client";
import { useEffect, useState, useTransition } from "react";
import { searchPosts } from "../_actions/searchAction";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<
    ({    id: string,
      title: string,
      slug: string,
      excerpt: string} & {
      subCategory: {
        slug: string;
        name: string;
        category: { name: string; slug: string };
      };
    })[]
  >([]);
  const [isPending, startTransition] = useTransition();

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  // Call server function when debouncedQuery changes
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    startTransition(async () => {
      const posts = await searchPosts(debouncedQuery);
      console.log("NAME::",posts[2]?.subCategory?.name.trim())
      setResults(posts);
    });
  }, [debouncedQuery]);

  const reset = ()=>{
    setResults([])
    setQuery('')
    setDebouncedQuery('')
  }

  return { results, setQuery, query, isPending, debouncedQuery,reset };
};
