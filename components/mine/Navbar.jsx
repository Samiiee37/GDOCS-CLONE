import Image from "next/image";
import Link from "next/link";
import DocumentInput from "./DocInput";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FileIcon } from "lucide-react";
import { FileJson } from "lucide-react";
import { Globe } from "lucide-react";
import { FileText } from "lucide-react";
import { FileSpreadsheet } from "lucide-react";
import { FilePlus2Icon } from "lucide-react";
import { FilePenIcon } from "lucide-react";
import { Trash } from "lucide-react";
import { Printer } from "lucide-react";
import { Undo2Icon } from "lucide-react";
import { Redo2Icon } from "lucide-react";
import { TextIcon } from "lucide-react";
import { BoldIcon } from "lucide-react";
import { UnderlineIcon } from "lucide-react";
import { ItalicIcon } from "lucide-react";
import TablePicker from "./TablePicker";
import downloads from "../../utils/download";

const Navbar = ({ editor }) => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-2 items-center py-1">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  File
                </MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className="size-4 mr-2" />
                      Save
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={() => downloads.downloadJSON(editor)}>
  <FileJson className="size-4 mr-2" />
  JSON
</MenubarItem>

<MenubarItem onClick={() => downloads.downloadHTML(editor)}>
  <Globe className="size-4 mr-2" />
  HTML
</MenubarItem>

<MenubarItem onClick={downloads.downloadPDF}>
  <FileSpreadsheet className="size-4 mr-2" />
  PDF
</MenubarItem>

<MenubarItem onClick={() => downloads.downloadText(editor)}>
  <FileText className="size-4 mr-2" />
  TEXT
</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    <FilePlus2Icon className="size-4 mr-2" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <FilePenIcon className="size-4 mr-2" />
                    Rename
                  </MenubarItem>
                  <MenubarItem>
                    <Trash className="size-4 mr-2" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => window.print()}>
                    <Printer className="size-4 mr-2" />
                    Print <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().undo().run()}
                  >
                    <Undo2Icon className="size-4 mr-2" />
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().redo().run()}
                  >
                    <Redo2Icon className="size-4 mr-2" />
                    Redo <MenubarShortcut>⌘Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() =>
                          editor
                            ?.chain()
                            .focus()
                            .insertTable({
                              rows: 1,
                              cols: 1,
                              withHeaderRow: false,
                            })
                            .run()
                        }
                      >
                        1 x 1
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor
                            ?.chain()
                            .focus()
                            .insertTable({
                              rows: 2,
                              cols: 2,
                              withHeaderRow: false,
                            })
                            .run()
                        }
                      >
                        2 x 2
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor
                            ?.chain()
                            .focus()
                            .insertTable({
                              rows: 3,
                              cols: 3,
                              withHeaderRow: false,
                            })
                            .run()
                        }
                      >
                        3 x 3
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor
                            ?.chain()
                            .focus()
                            .insertTable({
                              rows: 4,
                              cols: 4,
                              withHeaderRow: false,
                            })
                            .run()
                        }
                      >
                        4 x 4
                      </MenubarItem>
                      <MenubarSeparator />

                      <TablePicker editor={editor} />
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="size-4 mr-2" />
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleBold().run()
                        }
                      >
                        <BoldIcon className="size-4 mr-2" />
                        Bold <MenubarShortcut>⌘B</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleUnderline().run()
                        }
                      >
                        <UnderlineIcon className="size-4 mr-2" />
                        UnderLine <MenubarShortcut>⌘U</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleItalic().run()
                        }
                      >
                        <ItalicIcon className="size-4 mr-2" />
                        Italic <MenubarShortcut>⌘I</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
