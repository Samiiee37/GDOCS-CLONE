import { Building2Icon, CircleUserIcon } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { SiGoogledocs } from "react-icons/si";
import { format } from "date-fns";
import Ddmenu from "./ddmenu";
import { useRouter } from "next/navigation";


const DocRow = ({ document }) => {

    const onNewTabClick = (id) => {
        window.open(`/documents/${id}`, "_blank")
    }

    const router = useRouter();


  return (
    <TableRow className="cursor-pointer" onClick={() => router.push(`/documents/${document._id}`)}>
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>

      <TableCell className="font-medium md:w-[45%]">
        {document.title}
      </TableCell>

      <TableCell className="text-muted-foreground">
        <div className="flex items-center gap-2">
          {document.organizationId ? (
            <Building2Icon className="size-4" />
          ) : (
            <CircleUserIcon className="size-4" />
          )}
          {document.organizationId ? (
            "Organization"
          ) : (
            "Personal"
          )}
        </div>
      </TableCell>

      <TableCell className="text-muted-foreground hidden md:table-cell">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>

      <TableCell className="flex justify-end">
        <Ddmenu docId={document._id} title={document.title} onNewTab={onNewTabClick}/>
      </TableCell>
    </TableRow>
  );
};

export default DocRow;