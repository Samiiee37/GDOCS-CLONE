"use client";

import { useEditorState } from "@tiptap/react";
import {
  ChevronDownIcon,
  Rows3Icon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const LINE_HEIGHTS = [
  {
    label: "Single",
    value: "1",
  },
  {
    label: "1.5",
    value: "1.5",
  },
  {
    label: "Double",
    value: "2",
  },
  {
    label: "2.5",
    value: "2.5",
  },
  {
    label: "3",
    value: "3",
  },
];

const LineHeightButton = ({ editor }) => {
  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      lineHeight:
        editor?.getAttributes("textStyle").lineHeight ?? "1",
    }),
  });

  const current =
    LINE_HEIGHTS.find(
      (item) => item.value === editorState.lineHeight
    ) || LINE_HEIGHTS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 rounded px-2 py-1.5 hover:bg-gray-200">
          <Rows3Icon className="size-4" />
          <span className="text-sm">{current.label}</span>
          <ChevronDownIcon className="size-3" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {LINE_HEIGHTS.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() =>
              editor
                ?.chain()
                .focus()
                .setLineHeight(item.value)
                .run()
            }
          >
            {item.label}
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          onClick={() =>
            editor
              ?.chain()
              .focus()
              .unsetLineHeight()
              .run()
          }
        >
          Default
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LineHeightButton;