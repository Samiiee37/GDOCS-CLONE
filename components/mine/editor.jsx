"use client";

//imports
import { Ruler } from "./Ruler";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import ImageResize from "tiptap-extension-resize-image";
import Underline from "@tiptap/extension-underline";
import {
  TextStyle,
  FontFamily,
  Color,
  FontSize,
  LineHeight,
} from "@tiptap/extension-text-style";
import { useLiveblocksExtension, FloatingToolbar } from "@liveblocks/react-tiptap";
import Link from "@tiptap/extension-link";
import Toolbar from "./toolbar";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Navbar from "./Navbar";
import { Threads } from "../liveBloks/Threads";

const Editor = () => {
  const liveblocks = useLiveblocksExtension();
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({history: false}),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
      Highlight.configure({ multicolor: true }),
      TaskItem.configure({ nested: true }),
      TaskList,
      TableKit.configure({
        table: { resizable: true },
      }),
      ImageResize.configure({
        allowBase64: true,
      }),
      Underline,
      TextStyle,
      FontFamily,
      FontSize,
      LineHeight.configure({
        types: ["textStyle"],
      }),
    ],
    content: `
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <img src="https://placehold.co/600x400" />
        <img src="https://placehold.co/800x400" />
      `,
  });
  return (
    <div className="size-full overflow-x-auto px-4 print:p-0 print:bg-white print:overflow-visible bg-[#F9FBFD]">
      {/*Navbar*/}
      <div>
      <Navbar editor={editor}/>
    </div>
      {/* Toolbar */}
      <div className="sticky top-0 z-50 bg-[#F9FBFD] py-2">
        <Toolbar editor={editor} />
      </div>

      {/* Ruler */}
    <div className="flex justify-center">
      <Ruler />
    </div>

      {/* Editor */}
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor}/>
      </div>
    </div>
  );
};

export default Editor;
