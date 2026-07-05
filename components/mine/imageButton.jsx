"use client";

import { useRef, useState } from "react";
import { ImageIcon, UploadIcon, Link2Icon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ImageButton = ({ editor }) => {
  const fileInputRef = useRef(null);
  const [url, setUrl] = useState("");

  const insertImageFromUrl = () => {
    if (!url.trim()) return;

    editor
      ?.chain()
      .focus()
      .setImage({
        src: url.trim(),
      })
      .run();

    setUrl("");
  };

  const uploadImage = (event) => {
  const file = event.target.files?.[0];

  console.log("File:", file);

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    console.log("Result:", reader.result);

    const success = editor
      ?.chain()
      .focus()
      .setImage({
        src: reader.result,
      })
      .run();

    console.log("Inserted:", success);
  };

  reader.readAsDataURL(file);
};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-200">
          <ImageIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-80 p-4 space-y-4"
      >
        {/* Upload */}

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full items-center gap-2 rounded-md border p-2 hover:bg-gray-100"
        >
          <UploadIcon className="size-4" />
          Upload from device
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={uploadImage}
        />

        <div className="border-t" />

        {/* URL */}

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link2Icon className="size-4" />
            Image URL
          </div>

          <input
            value={url}
            placeholder="https://example.com/image.png"
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                insertImageFromUrl();
              }
            }}
            className="w-full rounded-md border px-3 py-2 text-sm outline-none"
          />

          <button
            onClick={insertImageFromUrl}
            className="w-full rounded-md bg-black py-2 text-white hover:bg-gray-800"
          >
            Insert Image
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ImageButton;