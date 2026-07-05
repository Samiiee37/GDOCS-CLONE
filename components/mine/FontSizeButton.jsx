"use client";

import { useState, useEffect } from "react";
import {
  MinusIcon,
  PlusIcon,
  ChevronDownIcon,
} from "lucide-react";

import { useEditorState } from "@tiptap/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const FONT_SIZES = [
  "8px",
  "9px",
  "10px",
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "30px",
  "36px",
  "48px",
  "60px",
  "72px",
];

const FontSizeButton = ({ editor }) => {
  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      fontSize:
        editor?.getAttributes("textStyle").fontSize ?? "16px",
    }),
  });

  const [fontSize, setFontSize] = useState(
    editorState.fontSize.replace("px", "")
  );


  const applyFontSize = (value) => {
    if (!value) return;

    const size = `${parseInt(value)}px`;

    editor
      ?.chain()
      .focus()
      .setFontSize(size)
      .run();
  };

  const increase = () => {
    const next = parseInt(fontSize) + 1;
    setFontSize(next.toString());
    applyFontSize(next);
  };

  const decrease = () => {
    const next = Math.max(1, parseInt(fontSize) - 1);
    setFontSize(next.toString());
    applyFontSize(next);
  };

  return (
    <div className="flex items-center rounded-md border bg-white">
      {/* Minus */}
      <button
        onClick={decrease}
        className="flex h-8 w-8 items-center justify-center hover:bg-gray-100"
      >
        <MinusIcon className="size-4" />
      </button>

      {/* Input */}
      <input
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        onBlur={() => applyFontSize(fontSize)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            applyFontSize(fontSize);
          }
        }}
        className="w-10 border-x text-center text-sm outline-none"
      />

      {/* Plus */}
      <button
        onClick={increase}
        className="flex h-8 w-8 items-center justify-center hover:bg-gray-100"
      >
        <PlusIcon className="size-4" />
      </button>

      {/* Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex h-8 w-6 items-center justify-center hover:bg-gray-100">
            <ChevronDownIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="max-h-64 overflow-y-auto">
          {FONT_SIZES.map((size) => (
            <DropdownMenuItem
              key={size}
              onClick={() => {
                setFontSize(size.replace("px", ""));
                applyFontSize(size.replace("px", ""));
              }}
            >
              {size.replace("px", "")}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FontSizeButton;