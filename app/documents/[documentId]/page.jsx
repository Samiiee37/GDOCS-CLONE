//imports
import Editor from "@/components/mine/editor";
import { Room } from "@/components/liveBloks/Room";

const Document = async ({ params }) => {
    const { documentId } = await params;

    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            
            <Room>
                 <Editor/>
            </Room>
        </div>
    )
}

export default Document;