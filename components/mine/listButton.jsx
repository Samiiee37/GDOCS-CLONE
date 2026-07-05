"use client";

import {
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  ChevronDownIcon,
} from "lucide-react";

import { useEditorState } from "@tiptap/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ListButton = ({ editor }) => {
  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      bullet: editor?.isActive("bulletList") ?? false,
      ordered: editor?.isActive("orderedList") ?? false,
    }),
  });

  const ActiveIcon = editorState.ordered
    ? ListOrderedIcon
    : editorState.task
    ? ListTodoIcon
    : ListIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 rounded px-2 py-1.5 hover:bg-gray-200">
          <ActiveIcon className="size-4" />
          <ChevronDownIcon className="size-3" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem
          onClick={() =>
            editor?.chain().focus().toggleBulletList().run()
          }
        >
          <ListIcon className="mr-2 size-4" />
          Bulleted List
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            editor?.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrderedIcon className="mr-2 size-4" />
          Numbered List
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ListButton;