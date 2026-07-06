"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 300);
  const inputref = useRef();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClear = (e) => {
    setValue("");
    inputref.current?.blur();
  };
  useEffect(() => {
  if (!debouncedValue.trim()) {
    // Show all documents
    return;
  }

  console.log("Searching for:", debouncedValue);

  // Call your Convex query or API here
}, [debouncedValue]);
  return (
    <div className="flex-1 flex items-center justify-center">
      <form className="relative max-w-[720px] w-full" onSubmit={(e) => e.preventDefault()}>
        <Input
          value={value}
          onChange={handleChange}
          ref={inputref}
          placeholder="Search"
          className="
    w-full
    h-12
    rounded-full
    border
    border-transparent
    bg-[#F0F4F8]
    px-14
    text-base
    text-neutral-900
    placeholder:text-neutral-500
    transition-all
    duration-200
    outline-none
    focus:bg-white
    focus:border-blue-500
    focus:shadow-[0_2px_8px_rgba(0,0,0,0.12)]
    focus-visible:ring-0
  "
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
        >
          <SearchIcon />
        </Button>
        {value && (
          <Button
          onClick={handleClear}
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
          >
            <XIcon />
          </Button>
        )}
      </form>
    </div>
  );
};

export default SearchInput;
