"use client";

import { HighlighterIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const COLORS = [
  "#fff475",
  "#fbbc04",
  "#f28b82",
  "#f6c7b6",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
  "#fdcfe8",
  "#e6c9a8",
  "#d7ccc8",
  "#ffffff",
];

const HighlightColorBtn = ({ editor }) => {
  const color =
    editor?.getAttributes("highlight").color || "#fff475";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative flex h-8 w-8 items-center justify-center rounded hover:bg-gray-200">
          <HighlighterIcon className="size-4" />

          <span
            className="absolute bottom-1 h-0.5 w-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-56 p-3"
      >
        <button
          className="mb-3 w-full rounded border px-2 py-1 text-sm hover:bg-gray-100"
          onClick={() =>
            editor?.chain().focus().unsetHighlight().run()
          }
        >
          No Highlight
        </button>

        <div className="grid grid-cols-6 gap-2">
          {COLORS.map((item) => (
            <button
              key={item}
              className="h-6 w-6 rounded border transition hover:scale-110"
              style={{ backgroundColor: item }}
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleHighlight({ color: item })
                  .run()
              }
            />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HighlightColorBtn;