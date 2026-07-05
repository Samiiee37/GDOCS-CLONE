"use client";
import ToolbarButton from "./toolbarbtn";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDownIcon,
  HighlighterIcon,
  ImageIcon,
  ItalicIcon,
  Link2Icon,
  ListCollapseIcon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  MinusIcon,
  PlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SearchIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
  UploadIcon,
} from "lucide-react";
import { useEditorState } from "@tiptap/react";
import FontFamilyBtn from "./fontFamilyBtn";
import HeadingLevelBtn from "./HeadingLevelBtn";
import TextColorBtn from "./textColorButton";
import HighlightColorBtn from "./HighlightColorBtn";
import LinkButton from "./linkButton";
import ImageButton from "./imageButton";
import AlignButton from "./alignButton";
import ListButton from "./listButton";
import FontSizeButton from "./FontSizeButton";
import LineHeightButton from "./LineHeightButton";


const Toolbar = ({ editor }) => {
  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Georgia", value: "Georgia" },
    { label: "Verdana", value: "Verdana" },
  ];
  
  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor?.isActive("bold") ?? false,
      isItalic: editor?.isActive("italic") ?? false,
      isUnderline: editor?.isActive("underline") ?? false,
      istaskList: editor?.isActive("tasklist") ?? false,
    }),
  });

  const btnArray = [
    {
      label: "undo",
      icon: Undo2Icon,
      onClick: () => {
        editor.commands.undo();
      },
    },
    {
      label: "redo",
      icon: Redo2Icon,
      onClick: () => {
        editor.commands.redo();
      },
    },
    {
      label: "Print",
      icon: PrinterIcon,
      onClick: () => {
        window.print();
      },
    },
    {
      label: "Bold",
      icon: BoldIcon,
      isActive: editorState.isBold,
      onClick: () => editor?.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: ItalicIcon,
      isActive: editorState.isItalic,
      onClick: () => editor?.chain().focus().toggleItalic().run(),
    },
    {
      label: "Underline",
      icon: UnderlineIcon,
      isActive: editorState.isUnderline,
      onClick: () => editor?.chain().focus().toggleUnderline().run(),
    },
    {
      label: "List Todo",
      icon: ListTodoIcon,
      onClick: () => editor?.chain().focus().toggleTaskList().run(),
      isActive: editor?.isActive("taskList"),
    },
    {
      label: "Remove Formatting",
      icon: RemoveFormattingIcon,
      onClick: () => editor?.chain().focus().unsetAllMarks().run(),
    },
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto ">
      <FontFamilyBtn editor={editor} />
      <HeadingLevelBtn editor={editor} />
      <TextColorBtn editor={editor}/>
      <HighlightColorBtn editor={editor} />
      <LinkButton editor={editor}/>
      <ImageButton editor={editor}/>
      <AlignButton editor={editor}/>
      <FontSizeButton editor={editor}/>
      <ListButton editor={editor}/>
      <LineHeightButton editor={editor}/>
      {btnArray.map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;