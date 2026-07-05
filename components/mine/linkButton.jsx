"use client";

import { useState } from "react";
import { Link2Icon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const LinkButton = ({ editor }) => {
  const [value, setValue] = useState("");

  const addLink = () => {
    if (!value.trim()) return;

    let href = value.trim();

    // Add https:// if the user omitted it
    if (!/^https?:\/\//i.test(href)) {
      href = `https://${href}`;
    }

    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href })
      .run();

    setValue("");
  };

  const removeLink = () => {
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .unsetLink()
      .run();

    setValue("");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-200">
          <Link2Icon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-72 p-4 space-y-3"
      >
        <input
          type="text"
          placeholder="https://example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addLink();
            }
          }}
          className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={removeLink}
            className="rounded border px-3 py-1.5 text-sm hover:bg-gray-100"
          >
            Remove
          </button>

          <button
            onClick={addLink}
            className="rounded bg-black px-3 py-1.5 text-sm text-white hover:bg-gray-800"
          >
            Apply
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkButton;