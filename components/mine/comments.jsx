"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import ToolbarButton from "./toolbarbtn";

const Comments = ({ editor }) => {
  return (
    <ToolbarButton
      label="Comment"
      icon={MessageSquarePlusIcon}
      isActive={editor?.isActive("liveblocksCommentMark")}
      onClick={() => editor?.chain().focus().addPendingComment().run()}
    />
  );
};

export default Comments;