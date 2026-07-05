"use client";

import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  ChevronDownIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const AlignButton = ({ editor }) => {
  const alignment = editor?.getAttributes("paragraph").textAlign || "left";

  const Icon =
    alignment === "center"
      ? AlignCenterIcon
      : alignment === "right"
      ? AlignRightIcon
      : alignment === "justify"
      ? AlignJustifyIcon
      : AlignLeftIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 rounded px-2 py-1.5 hover:bg-gray-200">
          <Icon className="size-4" />
          <ChevronDownIcon className="size-3" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem
          onClick={() =>
            editor?.chain().focus().setTextAlign("left").run()
          }
        >
          <AlignLeftIcon className="mr-2 size-4" />
          Left
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            editor?.chain().focus().setTextAlign("center").run()
          }
        >
          <AlignCenterIcon className="mr-2 size-4" />
          Center
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            editor?.chain().focus().setTextAlign("right").run()
          }
        >
          <AlignRightIcon className="mr-2 size-4" />
          Right
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            editor?.chain().focus().setTextAlign("justify").run()
          }
        >
          <AlignJustifyIcon className="mr-2 size-4" />
          Justify
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlignButton;