"use client";

import { PaletteIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const COLORS = [
  "#000000",
  "#434343",
  "#666666",
  "#999999",
  "#cccccc",
  "#ffffff",

  "#e53935",
  "#fb8c00",
  "#fdd835",
  "#43a047",
  "#1e88e5",
  "#8e24aa",

  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#aecbfa",

  "#d7aefb",
  "#fdcfe8",
  "#d0d0d0",
  "#795548",
  "#607d8b",
  "#009688",
];

const TextColorBtn = ({ editor }) => {
  const color =
    editor?.getAttributes("textStyle").color || "#000000";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative flex h-8 w-8 items-center justify-center rounded hover:bg-gray-200">
          <PaletteIcon className="size-4" />

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
            editor?.chain().focus().unsetColor().run()
          }
        >
          Default
        </button>

        <div className="grid grid-cols-6 gap-2">
          {COLORS.map((item) => (
            <button
              key={item}
              className="h-6 w-6 rounded border hover:scale-110 transition"
              style={{ backgroundColor: item }}
              onClick={() =>
                editor?.chain().focus().setColor(item).run()
              }
            />
          ))}
        </div>

        <div className="mt-3 border-t pt-3">
          <label className="flex cursor-pointer items-center justify-between text-sm">
            <span>Custom</span>

            <input
              type="color"
              value={color}
              onChange={(e) =>
                editor
                  ?.chain()
                  .focus()
                  .setColor(e.target.value)
                  .run()
              }
            />
          </label>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TextColorBtn;